from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def signup():

    body = request.get_json()
    nombre= nombre["nombre"]
    email = body["email"]
    password = body["password"]

    #verificar usuario

    aux_user =Usuario.query.filter_by(email=email).first()
    if aux_user:
        raise APIException("El usuario existe :(", status_code=404)

    user =Usuario(email=email,password=password,nombre=nombre)
    db.session.add(user)
    db.session.commit()
    return jsonify("ok"), 201


@api.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    email = body["email"]
    password = body["password"]
    # print(body)

    user = Usuario.query.filter_by(email=email).first()
    if user is None:
        raise APIException("El usuario no existe :(", status_code=404)

    if user.password != password:
        raise APIException("Password o Email Incorrecto :(", status_code=404)

    # TOKEN
    data = {
        "email": user.email,
        "user_id": user.id
    }
    token = create_access_token(identity=data)
    print(token)
    return jsonify(token), 201

@api.route('/private', methods=['GET', 'POST','DELETE'])
@jwt_required()
def private():
    return 'private'


@api.route('/logout',methods=['GET'])
def logout():
    return 