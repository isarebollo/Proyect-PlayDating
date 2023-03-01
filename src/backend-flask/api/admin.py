import os
from flask import Flask
from flask_admin import Admin
from .models import db, Usuario, Actividad, Evento, Participantes_Evento, Tipo_De_Actividad, Comentario, Favorito, Invitacion
from flask_admin.contrib.sqla import ModelView


app = Flask(__name__)


def setup_admin(app):
    # set optional bootswatch theme
    app.config['FLASK_ADMIN_SWATCH'] = 'flatly'

    admin = Admin(app, name='PlayDating', template_mode='bootstrap3')
# Add administrative views here
    admin.add_view(ModelView(Usuario, db.session))
    admin.add_view(ModelView(Actividad, db.session))
    admin.add_view(ModelView(Evento, db.session))
    admin.add_view(ModelView(Participantes_Evento, db.session))
    admin.add_view(ModelView(Tipo_De_Actividad, db.session))
    admin.add_view(ModelView(Comentario, db.session))
    admin.add_view(ModelView(Favorito, db.session))
    admin.add_view(ModelView(Invitacion, db.session))