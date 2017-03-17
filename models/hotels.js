var Sequelize = require('sequelize');
var db = require('./_db')

var Hotel = db.define("hotel", properties)

var properties = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.FLOAT,
        validate: {
            min: 0,
            max: 5
        }
    },
    amenities: {
        type: Sequelize.STRING
    }
}

module.exports = Hotel
