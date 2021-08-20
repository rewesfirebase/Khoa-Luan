import getopt
import signal
import time
import sys
import json
import wiotp.sdk.application
import dns
import time
from pymongo import MongoClient
import os
from flask import Flask, request, render_template, jsonify
app = Flask(__name__, static_folder='public', template_folder='views')
# Khởi tạo một kết nối
app.secret = os.environ.get('SECRET')
myConfig = {
        "auth" :{
            "key": "a-smu1fm-miq0olvdjs",
            "token": "8vcExm2EqJRr2M5jls"
            }
    }
clientMDB = MongoClient("mongodb+srv://vutrantienbao290699:vutrantienbao99@project.murnk.mongodb.net/ibm?retryWrites=true&w=majority")
# Khởi tạo một kết nối
client = wiotp.sdk.application.ApplicationClient(config=myConfig)

# Kết nối
client.connect()
db = clientMDB["ibm"]
mycol = db.record

# Sự kiện khi thiết bị gởi lên server
def myEventCallback(event):
  str = "%s event '%s' received from device [%s]: %s"
  datas = event.data
  print(datas["d"])
  print(type(datas))
  mycol.insert_one(datas["d"])

# Gán sự kiện
client.deviceEventCallback = myEventCallback

@app.route("/")
def main():
  while True:
    client.subscribeToDeviceEvents()
    time.sleep(1)
    return "Hello Wolrd!"
  
if __name__ == '__main__':
    app.run()

