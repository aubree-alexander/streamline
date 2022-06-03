const { Model } = require('sequelize');
const sequelize = require('../config/connection.js');

class StreamingService extends Model {}

StreamingService.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        movieshow_id: {
            type: DataTypes.INTEGER,
            references: {
                //AA - NOT SURE ON THIS.
                model: 'movieshow',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true
    }
);

module.exports = StreamingService;