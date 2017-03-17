var Promise = require('bluebird');
var express = require('express');
var router = express.Router();
var db = require('../models').db;

var Place = require('../models').Place;
// var Hotel = require('./models/hotel');
var Hotel = require('../models').Hotel;
// var Restaurant = require('./models/restaurant');
var Restaurant = require('../models').Restaurant;
// var Activity = require('./models/activity');
var Activity = require('../models').Activity;


module.exports = router;

router.get('/', function(req, res, next) {
    var findRestaurant = Restaurant.findAll({});
    var findActivity = Activity.findAll({});
    var findHotel = Hotel.findAll({});

    Promise.all([findRestaurant, findActivity, findHotel])
        .then(([restaurants, activities, hotels]) => {
            res.render('index', {
                hotels,
                restaurants,
                activities
            })
        })
        .catch(next)
})
