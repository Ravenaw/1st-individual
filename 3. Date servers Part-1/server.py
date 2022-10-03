from fastapi import FastAPI
import uvicorn
from datetime import datetime

app = FastAPI()


@app.get("/timestamp")
def _():
    return {"time": datetime.now().timestamp()}


uvicorn.run(app, host="127.0.0.1", port=8081)
