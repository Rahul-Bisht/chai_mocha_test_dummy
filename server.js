var http = require('http');
var express=require('express');
var app=express();
var path=require('path');

const port = 10245;

var basePath=__dirname;

app.use('/',express.static(basePath));

app.get('/',function(req, res) {
  res.sendFile(path.join(basePath+'/test.html'));
});
app.listen(port);
