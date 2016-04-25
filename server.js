//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//load configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//loading routes
var routes = require('./routes/routes')(app);

var server = app.listen(3000, function () {
    console.log('Listening on port %s...', server.address().port);
});