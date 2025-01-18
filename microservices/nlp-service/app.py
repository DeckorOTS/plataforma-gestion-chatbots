from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Servicio de Procesamiento de Lenguaje Natural'

if __name__ == '__main__':
    app.run(debug=True, port=5001)