'use strict';

module.exports = function(app){
    var movieController = require('../controllers/movieController');

    //movies routes
    app.route('/movies')
        .get(movieController.list_all_movies)
        .post(movieController.create_a_movie);

    app.route('/movies/:movieId')
        .delete(movieController.delete_a_movie);
};

