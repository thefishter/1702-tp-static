var Sequelize = require('sequelize');
var db = require('./_db')

var Restaurant = db.define("restaurant", things)

var things = {
    name: {
        type: Sequelize.STRING
    },
    cuisine: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 4
        }
    }
}

module.exports = Restaurant
