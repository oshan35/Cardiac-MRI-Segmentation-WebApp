from flask import Flask, jsonify, request
from flask_cors import CORS
import nibabel as nb
import torch
import io
import torchvision.transforms as transforms
import base64

MODEL_PATH = 'PATH'

server = Flask(__name__)

CORS(server)

model = torch.load(MODEL_PATH)
model.eval()

def load_image()


def preprocessing_image(image):
    preprocess = transforms.Compose([])



@server.route('/api/data', methods=['GET'])
def get_data():
    data = {"message": "Hello from flask backend"}
    return jsonify(data)

if __name__== '__main__':
    server.run(debug=True)

