const express = require('express')
const app = express()
const port = 3000

//Errors
function NotAuthorizedError() {
  this.name = "NotAuthorizedError";
  this.message = "";
}
NotAuthorizedError.prototype = Error.prototype;

function checkAuth(request) {
  if (!request.token) {
    var err = new NotAuthorizedError();
    throw(err)
  }
}

app.use(express.json());

app.get('/', (req, res) => {
  var request = JSON.parse(req.body);
  checkAuth(request);
  res.json(
    {
      version: "v1.0-alpha",
      api: "Daeltheria API",
    }
  );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
