from flask import Flask
app = Flask(__name__)

res = {
    'productos': [
        {
            'id': 1,
            'name': 'name 1',
            'price': 50
        },
        {
            'id': 2,
            'name': 'name 2',
            'price': 150
        },
        {
            'id': 3,
            'name': 'name 3',
            'price': 250
        }
    ]
}

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/productos')
def productos():
    return res