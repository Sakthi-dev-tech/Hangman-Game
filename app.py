from flask import Flask
from views import views
import jinja2

#RUN pip install -r requirements.txt in your terminal first before running

app = Flask(__name__)
app.register_blueprint(views, url_prefix="/")

jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader('templates'))

template = jinja_env.get_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)