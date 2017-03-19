// Load Libraries
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.json());

//Config
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
var clientRoutes = require('./client/routes/index')
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/bower_components')));

app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'pug');
app.use('/', clientRoutes);

var serverPort = process.env.PORT ? process.env.PORT : '8075';
app.listen(serverPort);
console.log("server running...");
