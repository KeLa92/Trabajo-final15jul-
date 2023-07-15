# para abrir entorno virtual: en terminal py app.py (tiene q aparecer venv en verde)
# eso tmb se usa para 'guardar' y ver los cambios en la pag
# escribir deactivate en la terminal para sacarlo
# .\Scripts\activate

from flask import Flask, g, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
