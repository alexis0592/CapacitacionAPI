var express = require("express"),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    Mogoclient = require('mongodb').MongoClient,
    Movie = require('./api/models/movieModel'),
    bodyParser = require('body-parser'),
    routes = require('./api/routes/moviesRoutes');

//var dbPath = 'mongodb://localhost/Moviesdb';
var dbPath = 'mongodb://heroku_097rwx1n:kqqqs4l3426531qn8llmre67q5@ds127983.mlab.com:27983/heroku_097rwx1n'

mongoose.Promise = global.Promise;
mongoose.connect(dbPath, {
    useMongoClient:true
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    next();
});


routes(app);

// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

app.listen(port);
console.log("App is alive in port" + port);