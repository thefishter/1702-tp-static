var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
    logging: false
});


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
        type: Sequelize.STRING
    }
}

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

var Activity = db.define("activity", stuff)

var stuff = {
    name: {
        type: Sequelize.STRING
    },
    age_range: {
        type: Sequelize.STRING,
        defaultValue: "All"
    }
}

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
    db: db,
    Hotel: Hotel,
    Place: Place,
    Restaurant: Restaurant,
    Activity: Activity
};
