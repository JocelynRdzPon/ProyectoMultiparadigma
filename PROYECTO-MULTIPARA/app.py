from flask import Flask, render_template, request, make_response
from database import db
from encriptador import bcrypt
from flask_migrate import Migrate
import logging
from config import BasicConfig
import psycopg2
from flask_cors import CORS
from routes.user.user import appuser
from routes.pdf.pdf import apppdf
from routes.pdf.pdf import apppdf
from routes.csv.csv import appcsv
from flask import Blueprint,request,jsonify,render_template
from sqlalchemy import exc 
from models import Usuario
from app import db,bcrypt
from auth import tokenCheck,verificarToken
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate,Table,TableStyle,Paragraph
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.enums import TA_CENTER


app = Flask(__name__)
app.register_blueprint(appuser)
app.register_blueprint(apppdf)
app.register_blueprint(appcsv)
app.config.from_object(BasicConfig)
CORS(app)
bcrypt.init_app(app)
db.init_app(app)
migrate = Migrate()
migrate.init_app(app,db)
logging.basicConfig(level=logging.DEBUG, filename='debug.log') # El logging sirve para saber los errores que llega a tener la app
appuser=Blueprint('appuser',__name__,template_folder='templates')

@app.route('/', methods=['GET'])
def inicio():
    return render_template('login.html')

