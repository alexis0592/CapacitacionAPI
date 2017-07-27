'use strict';

module.exports = function(app){
    var movieList = require('../controllers/movieController');

    //movies routes
    app.route('/movies')
        .get(movieList.list_all_movies)
        .post(movieList.create_a_movie);

    app.route('/movies/:movieId')
        .delete(movieList.delete_a_movie);
};

