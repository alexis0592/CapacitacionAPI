'use strict';

var mongoose = require('mongoose'),
    Movie = mongoose.model('Movie');

//Metodos

//listar todas las películas
exports.list_all_movies = function(req, res){
    Movie.find({}, function(err, movie){
        if(err){
            res.send(err);
        }

        res.json(movie);
    });
};

//crear una película
exports.create_a_movie = function(req, res){
    var new_movie = new Movie(req.body);
    new_movie.save(function(err, movie){
        if(err){
            res.send(err);
        }

        res.json(movie);
    });
};

//función para Borrar una película
exports.delete_a_movie = function(req, res){
    Movie.remove({
        _id : req.params.movieId
    }, function(err, movie){
        if(err){
            res.send(err);
        }
        res.json({message : 'Movie succesfully deleted'});
    });
}