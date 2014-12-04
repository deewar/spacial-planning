var express = require('express');

var app = express();

app.use(express.static(__dirname +'/web/'));


app.listen(8000)

console.log("server started");