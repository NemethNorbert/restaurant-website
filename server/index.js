var express = require('express');
var cors = require('cors');
var data = require('./testData');

var app = express();

app.use(cors());

app.get('/users', cors(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.json(data.data)
});

app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
});
