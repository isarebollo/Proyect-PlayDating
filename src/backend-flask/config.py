import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = '1234'
    SQLALCHEMY_DATABASE_URI = 'postgresql://pladating_user:Jvg5pL2bf0XweWLx6YgFxP30rTvNPVSt@dpg-cfvjnht269v0ptlohgpg-a/pladating'
    


class ProductionConfig(Config):
    DEBUG = False


class StagingConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class TestingConfig(Config):
    TESTING = True