const { Model } = require('sequelize');

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