from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

from flask_migrate import Migrate

from config import Config

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = Config.SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Usuario(db.Model):
    __tablename__= "usuario"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    nombre = db.Column(db.String(250), nullable=False)
    password = db.Column(db.String(250), nullable=False)
    # provincia = db.Column(db.String(250), nullable=False)
    # numero_hijos = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<Usuario %r>' % self.email
 
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            # "provincia": self.provincia,
            # "numero_hijos": self.numero_hijos
            }


@app.route('/')
def hello():
    return "Hello World!"


@app.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)


if __name__ == '__main__':
    app.run(debug=True,port=6060)