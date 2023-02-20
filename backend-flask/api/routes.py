import os
import re
import bcrypt

from flask_cors import CORS
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Actividad, Evento, Participantes_Evento, Tipo_De_Actividad, Comentario, Favorito, Invitacion
from api.utils import generate_sitemap, APIException
from api.estados import ESTADO_CANCELADO, ESTADO_CERRADO, ESTADO_DISPONIBLE, ESTADO_LLENO
from flask_swagger import swagger


from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

from datetime import timedelta


api = Blueprint('api', __name__)
CORS(api)
CODE = "utf-8"
email_regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'


def obtener_usuario_id():
    informacion_usuario = get_jwt_identity()
    if informacion_usuario is None:
        raise APIException('Se espera jwt token')
    return informacion_usuario["usuario_id"]

def validacion_email_password(email, password):
    if email == "":
        raise APIException("Campo email vacio")
    if not (re.search(email_regex, email)):
        raise APIException("Formato de email invalido")
    if password == "":
        raise APIException("Campo password vacio")

def validacion_campos_registro(email, password, nombre, provincia, numero_hijos):
    validacion_email_password(email, password)
    if nombre == "":
        raise APIException("Campo nombre vacio")
    if provincia == "":
        raise APIException("Campo provincia vacio")
    if numero_hijos == "" or numero_hijos == 0:
        raise APIException("Campo numero_hijos vacio o invalido")

def validacion_campos_login(email, password):
    validacion_email_password(email, password)



def validacion_creacion_evento(creador, estado, actividad):
    if actividad == None:
        raise APIException('Actividad no existe')
    if estado == None:
        raise APIException('Estado invalido')
    if creador == None:
        raise APIException('Usuario no existe')


@api.route('/nuevo/registro', methods=['POST'])
def registro():
    body = request.get_json()
    email = body['email']
    password = body['password']
    hashed = bcrypt.hashpw(password.encode(CODE), bcrypt.gensalt(14))
    auxHashed = hashed.decode(CODE)
    nombre = body['nombre']
    provincia = body['provincia']
    numero_hijos = body['numero_hijos']
    validacion_campos_registro(
       email, password, nombre, provincia, numero_hijos)
    aux_usuario = Usuario.query.filter_by(email=email).first()
    if not (aux_usuario is None):
            raise APIException("Usuario ya existe.")
    usuario = Usuario(email=email, password=password, nombre=nombre,
                        provincia=provincia, numero_hijos=numero_hijos)
    usuario = Usuario(email=email, password=auxHashed, nombre=nombre,
                         provincia=provincia, numero_hijos=numero_hijos)
    db.session.add(usuario)
    db.session.commit()
    return jsonify({'message': 'Usuario creado exitosamente', 'data': usuario.serialize()}), 201


@api.route('/login', methods=['POST'])
def login():

    body = request.get_json()
    email = body["email"]
    password = body["password"]
    user = Usuario.query.filter_by(email=email).first()
    if user is None:
        raise APIException("El usuario no existe :(", status_code=404)

    if user.password != password:
        raise APIException("Password o Email Incorrecto :(", status_code=404)

    # TOKEN
    data = {
        "email": user.email,
        "usuario_id": user.id
    }
    token = create_access_token(
        identity=data, expires_delta=timedelta(weeks=4))
    return jsonify({'message': 'Login exitoso', 'data': token, 'usuario_id': user.id})

@api.route('/perfil', methods=['GET'])
@jwt_required()
def get_info_usuario():
    usuario_id = obtener_usuario_id()
    usuario = Usuario.query.get(usuario_id)
    if usuario is None:
        raise APIException("Usuario no encontrado")
    return jsonify({'message': 'Informacion solicitada con exito', 'data': usuario.serialize()})

@api.route('/perfil/modificar', methods=['POST'])
@jwt_required()
def modificar_info_usuario():
    usuario_id = obtener_usuario_id()
    body = request.get_json()
    usuario = Usuario.query.get(usuario_id)
    if usuario is None:
        raise APIException("Usuario no encontrado")
    provincia = body['provincia']
    numero_de_hijos = body['numero_hijos']
    if provincia is not None:
        usuario.provincia = body['provincia']
    if numero_de_hijos is not None:
        usuario.numero_hijos = body['numero_hijos']
    db.session.commit()
    return jsonify({'message': "Campos actualizados exitosamente", 'data': usuario.serialize()})


@api.route('/tipos/actividad', methods=['GET'])
def get_tipos_de_actividad():
    tipos_de_actividad = Tipo_De_Actividad.query.all()
    all_tipos_de_actividad = list(
        map(lambda tipo_de_actividad: tipo_de_actividad.serialize(), tipos_de_actividad))
    return jsonify(all_tipos_de_actividad)

@api.route('/actividades', methods=['GET'])
def get_actividades():
    actividades = Actividad.query.all()
    all_actividades = list(
        map(lambda actividad: actividad.serialize(), actividades))
    return jsonify({'message': 'Información de todas las actividades solicitada exitosamente', 'data': all_actividades})


@api.route('/eventos', methods=['GET'])
@jwt_required()
def get_eventos():
    all_eventos = []
    creador_id = obtener_usuario_id()
    creador = Usuario.query.filter_by(id=creador_id).first()
    usuarios = Usuario.query.filter_by(provincia=creador.provincia).all()
    for usuario in usuarios:
        eventos = Evento.query.filter_by(creador_id=usuario.id).all()
        for evento in eventos:
            all_eventos.append(evento)
    all_eventos = list(map(lambda evento: evento.serialize(), all_eventos))
    return jsonify({'message': 'Informacion de eventos por provincia solicitada exitosamente', 'data': all_eventos})


@api.route('/crear/evento', methods=['POST'])
@jwt_required()
def crear_evento():
    body = request.get_json()
    fecha_y_hora = body['fecha_y_hora']
    creador_id = obtener_usuario_id()
    creador = Usuario.query.filter_by(id=creador_id).first()
    minimo_participantes = body['minimo_participantes']
    maximo_participantes = body['maximo_participantes']
    participantes_creador = body['participantes_creador']
    edad_minima = body['edad_minima']
    edad_maxima = body['edad_maxima']
    direccion = body['direccion']
    estado = ESTADO_DISPONIBLE
    actividad_id = body['actividad_id']
    actividad = Actividad.query.filter_by(id=actividad_id).first()
    validacion_creacion_evento(creador, estado, actividad)
    evento = Evento(
        fecha_y_hora=fecha_y_hora,
        creador_id=creador_id,
        minimo_participantes=minimo_participantes,
        maximo_participantes=maximo_participantes,
        edad_minima=edad_minima,
        edad_maxima=edad_maxima,
        direccion=direccion,
        estado=estado,
        actividad_id=actividad_id)
    if not (maximo_participantes > 0):
        raise APIException('Maximo participantes no puede ser 0')
    if maximo_participantes < minimo_participantes:
        raise APIException(
            'Maximo participantes no puede ser menor que minimo participantes')
    if not (minimo_participantes > 0):
        raise APIException('Minimo participantes no puede ser 0')
    aux_evento = Evento.query.filter_by(
        fecha_y_hora=fecha_y_hora, creador_id=creador_id, direccion=direccion, actividad_id=actividad_id).first()
    if aux_evento is not None:
        raise APIException('Evento duplicado')
    db.session.add(evento)
    db.session.commit()
    participantes_evento = Participantes_Evento(
        usuario_id=evento.creador_id, evento_id=evento.id, num_participantes_por_usuario=participantes_creador)
    db.session.add(participantes_evento)
    db.session.commit()
    return jsonify({'message': 'Evento creado exitosamente, el usuario se ha añadido a este evento', 'data': evento.serialize()})
