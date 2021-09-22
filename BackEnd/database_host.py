import shelve
import flask
from flask import Flask, request

#create dictionary style database using shelve
with shelve.open('database.sdb') as database:
  db = database
  
app = Flask(__name__)

class NotAuthorizedError(Exception):
  def __repr__(self) -> str:
    return "You did not provide a token in the json of your request."

@app.route(
  name="/get",
  methods = [
    'GET',
    'POST;
  ]
)
def _get(
  if 'token' not in request.json:
    raise NotAuthorizedError()
  else:
    return db[str(request.json["value"])]
)
