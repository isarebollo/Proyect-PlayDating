import os
import re
import bcrypt

from flask_cors import CORS
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Actividad, Evento, Participantes_Evento, Tipo_De_Actividad, Comentario, Favorito, Invitacion
from api.utils import generate_sitemap, APIException
from flask_swagger import swagger


from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager




api = Blueprint('api', __name__)
CORS(api)


@api.route('/nuevo/registro', methods=['POST'])
def registro():
    body = request.get_json()
    email = body['email']
    password = body['password']
    # hashed = bcrypt.hashpw(password.encode(CODE), bcrypt.gensalt(14))
    # auxHashed = hashed.decode(CODE)
    nombre = body['nombre']
    provincia = body['provincia']
    numero_hijos = body['numero_hijos']
    # validacion_campos_registro(
    #     email, password, nombre, provincia, numero_hijos)
    aux_usuario = Usuario.query.filter_by(email=email).first()
    if not (aux_usuario is None):
            raise APIException("Usuario ya existe.")
    usuario = Usuario(email=email, password=password, nombre=nombre,
                        provincia=provincia, numero_hijos=numero_hijos)
    # usuario = Usuario(email=email, password=auxHashed, nombre=nombre,
    #                     provincia=provincia, numero_hijos=numero_hijos)
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
        identity=data)
    return jsonify({'message': 'Login exitoso', 'data': token, 'usuario_id': user.id})


@api.route('/actividades', methods=['GET'])
def get_actividades():
    actividades = Actividad.query.all()
    all_actividades = list(
        map(lambda actividad: actividad.serialize(), actividades))
    return jsonify({'message': 'Información de todas las actividades solicitada exitosamente', 'data': all_actividades})