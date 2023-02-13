from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def signup():

    body = request.get_json()
    nombre =body ["nombre"]
    email = body["email"]
    password = body["password"]
    provincia = body["provincia"]

    #verificar usuario

    aux_user =Usuario.query.filter_by(email=email).first()
    if aux_user:
        raise APIException("El usuario existe :(", status_code=404)

    user =Usuario(email=email,password=password, provincia=provincia, nombre =nombre)
    db.session.add(user)
    db.session.commit()
    return jsonify("ok"), 201


