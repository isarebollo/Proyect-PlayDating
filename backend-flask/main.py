
import re
import bcrypt

from api.estados import ESTADO_CANCELADO, ESTADO_CERRADO, ESTADO_DISPONIBLE, ESTADO_LLENO

from flask import Flask, request, jsonify, url_for, Blueprint
from flask_swagger import swagger
from flask_restful import Api
from flask_cors import CORS 
from api.helloworld_api import helloworld

from api.models import db, Usuario, Actividad, Evento, Participantes_Evento, Tipo_De_Actividad, Comentario, Favorito, Invitacion
from api.utils import generate_sitemap, APIException



from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

from datetime import timedelta

app = Flask(__name__)
CORS(app) 
api = Api(app)


def obtener_usuario_id():
    informacion_usuario = get_jwt_identity() 
    if informacion_usuario is None:
        raise APIException('Se espera jwt token')
    return informacion_usuario["usuario_id"]

 

@app.route("/",)
def home():
    return generate_sitemap(app)



##  EN PROCESO DE FUNCIONAMIENTO###########################################






##########################################  NO TOCAR A PARTIR DE AQUI    ###########################################
api.add_resource(helloworld)

if __name__ == "__main__":
    app.run(debug=True,port=6060)

