const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class MovieShow extends Model {}

MovieShow.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        yearReleased: {
            type: DataTypes.INTEGER,
        },
        streamingservice_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'StreamingService',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true
    }
);

module.exports = MovieShow;