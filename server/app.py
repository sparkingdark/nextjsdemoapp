from flask import Flask,request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/echo',methods=["POST"])
def post():
    return {
        "id":"test",
        "message":f"request received from {request.json}"
    }


if __name__ == '__main__':
    app.run()