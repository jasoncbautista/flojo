var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get("/api/v1/entities/create/:name", function(req, res) {

    console.log("name", req.params.name);
});
app.listen(3091);
