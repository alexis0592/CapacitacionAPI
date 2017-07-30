'use strict';

module.exports = function(app){
    var movieController = require('../controllers/movieController');

    //movies routes
    app.route('/')
        .get(movieController.api_available);

    app.route('/movies')
        .get(movieController.list_all_movies)
        .post(movieController.create_a_movie);

    app.route('/movies/:movieId')
        .put(movieController.update_a_movie)
        .delete(movieController.delete_a_movie);
};

