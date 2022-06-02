const { Model } = require('sequelize');
const sequelize = require('../config/connection.js');

class MovieShow extends Model {}

MovieShow.init(
    {
        title: DataTypes.STRING,
    },
    {
        sequelize
    }
);

module.exports = MovieShow;