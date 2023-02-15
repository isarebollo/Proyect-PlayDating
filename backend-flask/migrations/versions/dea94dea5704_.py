"""empty message

Revision ID: dea94dea5704
Revises: 
Create Date: 2023-02-14 10:50:33.431954

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dea94dea5704'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tipo_de_actividad',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tipo', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('usuario',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('nombre', sa.String(length=250), nullable=False),
    sa.Column('password', sa.String(length=250), nullable=False),
    sa.Column('provincia', sa.String(length=250), nullable=False),
    sa.Column('numero_hijos', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('actividad',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=250), nullable=False),
    sa.Column('descripcion', sa.String(length=250), nullable=False),
    sa.Column('tipo_de_actividad_id', sa.Integer(), nullable=True),
    sa.Column('imagen', sa.String(length=250), nullable=False),
    sa.ForeignKeyConstraint(['tipo_de_actividad_id'], ['tipo_de_actividad.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorito',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('usuario_inicial_id', sa.Integer(), nullable=False),
    sa.Column('usuario_favorito_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['usuario_favorito_id'], ['usuario.id'], ),
    sa.ForeignKeyConstraint(['usuario_inicial_id'], ['usuario.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('evento',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('fecha_y_hora', sa.DateTime(), nullable=False),
    sa.Column('creador_id', sa.Integer(), nullable=False),
    sa.Column('minimo_participantes', sa.Integer(), nullable=True),
    sa.Column('maximo_participantes', sa.Integer(), nullable=True),
    sa.Column('edad_minima', sa.Integer(), nullable=True),
    sa.Column('edad_maxima', sa.Integer(), nullable=True),
    sa.Column('direccion', sa.String(length=250), nullable=False),
    sa.Column('estado', sa.String(length=250), nullable=False),
    sa.Column('actividad_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['actividad_id'], ['actividad.id'], ),
    sa.ForeignKeyConstraint(['creador_id'], ['usuario.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comentario',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('evento_id', sa.Integer(), nullable=False),
    sa.Column('usuario_id', sa.Integer(), nullable=False),
    sa.Column('comentario', sa.String(length=500), nullable=False),
    sa.Column('fecha_y_hora', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['evento_id'], ['evento.id'], ),
    sa.ForeignKeyConstraint(['usuario_id'], ['usuario.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('invitacion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('usuario_creador_id', sa.Integer(), nullable=False),
    sa.Column('usuario_invitado_id', sa.Integer(), nullable=False),
    sa.Column('evento_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['evento_id'], ['evento.id'], ),
    sa.ForeignKeyConstraint(['usuario_creador_id'], ['usuario.id'], ),
    sa.ForeignKeyConstraint(['usuario_invitado_id'], ['usuario.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('participantes_evento',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('evento_id', sa.Integer(), nullable=False),
    sa.Column('usuario_id', sa.Integer(), nullable=False),
    sa.Column('num_participantes_por_usuario', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['evento_id'], ['evento.id'], ),
    sa.ForeignKeyConstraint(['usuario_id'], ['usuario.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('participantes_evento')
    op.drop_table('invitacion')
    op.drop_table('comentario')
    op.drop_table('evento')
    op.drop_table('favorito')
    op.drop_table('actividad')
    op.drop_table('usuario')
    op.drop_table('tipo_de_actividad')
    # ### end Alembic commands ###
