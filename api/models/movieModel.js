'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: {
        type:String,
        Required:'Enter the movie title'
    },
    characters:{
        type:Array,
        required:true
    },
    resume:{
        type:String,
        required:true
    },
    format:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    imagePath:{
        type:String,
        required:false
    },
    created_at:{
        type:Date,
        default:Date.now
    },

});

module.exports = mongoose.model('Movie', MovieSchema);