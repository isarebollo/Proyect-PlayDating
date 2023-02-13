import os
from flask import Flask
from flask_admin import Admin
from api.models import db, Usuario
from flask_admin.contrib.sqla import ModelView


app = Flask(__name__)


def setup_admin(app):
    # set optional bootswatch theme
    app.config['FLASK_ADMIN_SWATCH'] = 'flatly'

    admin = Admin(app, name='PlayDating', template_mode='bootstrap3')
# Add administrative views here
    admin.add_view(ModelView(Usuario, db.session))
   
