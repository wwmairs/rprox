var express = require('express');
var app = express();
var proxy = require('express-http-proxy');

app.set('port', (process.env.PORT || 3000));

app.use('/', proxy('209.6.43.162:82/'));

app.listen(app.get('port'));