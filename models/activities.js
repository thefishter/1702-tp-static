var Sequelize = require('sequelize');
var db = require('./_db')

var Activity = db.define("activity", stuff)

var stuff = {
    name: {
        type: Sequelize.STRING
    },
    age_range: {
        type: Sequelize.STRING
    }
}

module.exports = Activity
