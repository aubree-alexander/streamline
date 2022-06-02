const { Model } = require('sequelize');
const sequelize = require('../config/config');

class StreamingService extends Model {}

StreamingService.init(
    {
        title: DataTypes.STRING,
    },
    {
        sequelize
    }
);

module.exports = StreamingService;