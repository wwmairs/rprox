var express = require('express');
var app = express();
var proxy = require('express-http-proxy');

app.use('/', proxy('wwmairs.com:82'));

app.listen(80);