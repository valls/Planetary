var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

//Instance app
var app = express();

//Middleware
app.use(bodyParser.json());
app.use(logger('dev'));

//Simulates database
var db = {};

//Routes
//app.get('/', function(req, res){
//  res.send('Hello world');
//});

app.post('/planets', function(req, res){

  console.log(JSON.stringify(db));

  var newPlanet = req.body.planet;
  newPlanet.id = new Date();

  db[newPlanet.id] = newPlanet;

  res.set('Content-Type', 'application/json');
  res.status(201);
  res.send(planet);
});

app.listen(8000, function(){
  console.log('Listening on port 8000...');
});
