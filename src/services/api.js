var express = require("express");
var data = require('../services/db.json'); // your json file path
var app = express();

app.get("/tools", function(req, res, next) {
  res.send(data);
});

app.listen(3333, () => console.log('Example app listening on port 3333!'))