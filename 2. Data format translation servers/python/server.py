from fastapi import FastAPI
import uvicorn
import requests
import json
import csv
import yaml
import xmltodict

app = FastAPI()


@app.get("/")
def _():
    return {"Hello": "World"}


@app.get("/json")
def _():
    return json.load(open('./Files/data.json'))


@app.get("/csv")
def _():
    jsonArray = []
    with open('./Files/data.csv', encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            jsonArray.append(row)

    return jsonArray


@app.get("/xml")
def _():
    with open("./Files/data.xml") as xml_file:

        data_dict = xmltodict.parse(xml_file.read())
    return data_dict


@app.get("/yaml")
def _():
    with open("./Files/data.yaml", 'r') as yaml_in, open("example.json", "w") as json_out:
        yaml_object = yaml.safe_load(yaml_in)
    return yaml_object


@app.get("/txt")
def _():
    phone = {}
    list = []
    with open("./Files/data.txt") as f:
        while True:
            line = f.readline().strip("\n")
            if not line:
                break
            phone["brand"] = line
            line = f.readline().strip("\n")
            phone["model"] = line
            line = f.readline().strip("\n")
            phone["year"] = line
            line = f.readline().strip("\n")
            phone["os"] = line
            list.append(phone.copy())
    f.close()
    return list


uvicorn.run(app, host="127.0.0.1", port=8081)
