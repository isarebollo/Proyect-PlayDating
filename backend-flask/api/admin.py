from flask import Flask
from flask_admin import Admin   ## No lo reconoce. 


app = Flask(__name__)

# set optional bootswatch theme
app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
admin = Admin(app, name='Isabel', template_mode='bootstrap3')
# Add administrative views here
#     admin.add_view(ModelView(Usuario, db.session))
#     admin.add_view(ModelView(Actividad, db.session))
#     admin.add_view(ModelView(Evento, db.session))
#     admin.add_view(ModelView(Participantes_Evento, db.session))
#     admin.add_view(ModelView(Tipo_De_Actividad, db.session))
#     admin.add_view(ModelView(Comentario, db.session))
#     admin.add_view(ModelView(Favorito, db.session))
#     admin.add_view(ModelView(Invitacion, db.session))
app.run()
