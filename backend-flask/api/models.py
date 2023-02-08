from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON


db = SQLAlchemy()

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