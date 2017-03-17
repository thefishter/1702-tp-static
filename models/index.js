var db = require('./_db');
var Activity = require('./activities');
var Hotel = require('./hotels');
var Restaurant = require('./restaurants');
var Place = require('./places');




//The good stuff
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
