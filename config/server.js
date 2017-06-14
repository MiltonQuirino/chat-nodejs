//Importar os modulos 
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//iniciar express
var app = express();

//Ejs
app.set('view engine','ejs');
app.set('views','./app/views');

//middleware
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

//Autoload routes, models, controllers into app
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

//exporta app
module.exports = app;