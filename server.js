var express = require("express"),
    app = express(),
    port = process.env.port || 3000,
    mongoose = require('mongoose'),
    Mogoclient = require('mongodb').MongoClient,
    Movie = require('./api/models/movieModel'),
    bodyParser = require('body-parser'),
    routes = require('./api/routes/moviesRoutes');

var dbPath = 'mongodb://localhost/Moviesdb';

mongoose.Promise = global.Promise;
mongoose.connect(dbPath, {
    useMongoClient:true
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log("App is alive in port" + port);