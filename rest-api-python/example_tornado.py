import tornado.ioloop
import tornado.web

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

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

class ProductsHandler(tornado.web.RequestHandler):
    def get(self):
        self.write(res)

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/productos", ProductsHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()