var Sequelize = require('sequelize');
var db = require('./_db')

var Place = db.define("place", info)

var info = {
    address: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
}

module.exports = Place
