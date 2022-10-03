from fastapi import FastAPI
import uvicorn
import requests
from datetime import datetime

app = FastAPI()
url = "http://127.0.0.1:8081/timestamp"


@app.get("/timestamp")
def _():
    return {"time": datetime.now().timestamp()}


@app.get("/timestamp/node")
def _():
    response = requests.request("GET", url)
    print(response.text)
    return {response.text}


uvicorn.run(app, host="127.0.0.1", port=8080)
