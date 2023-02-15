import os
import re
import bcrypt

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario
from api.utils import generate_sitemap, APIException
from flask_swagger import swagger


from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required



api = Blueprint('api', __name__)

######   VALIDACIONES CAMPOS #########

# def obtener_usuario_id():
#     informacion_usuario = get_jwt_identity()
#     if informacion_usuario is None:
#         raise APIException('Se espera jwt token')
#     return informacion_usuario["usuario_id"]

# def validacion_email_password(email, password):
#     if email == "":
#         raise APIException("Campo email vacio")
#     if not (re.search(email_regex, email)):
#         raise APIException("Formato de email invalido")
#     if password == "":
#         raise APIException("Campo password vacio")

# def validacion_campos_registro(email, password, nombre, provincia, numero_hijos):
#     validacion_email_password(email, password)
#     if nombre == "":
#         raise APIException("Campo nombre vacio")
#     if provincia == "":
#         raise APIException("Campo provincia vacio")
#     if numero_hijos == "" or numero_hijos == 0:
#         raise APIException("Campo numero_hijos vacio o invalido")

# def validacion_campos_login(email, password):
#     validacion_email_password(email, password)

######   RUTAS BACK #########

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
    print(body)

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
    token = create_access_token(identity=data)
    print(token)
    return jsonify(token), 201
