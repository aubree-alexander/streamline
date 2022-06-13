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
                key: 'id'
            },
        },
        // streamingservice_name: {
        //     type: DataTypes.STRING,
        //     include: {
        //         model: 'StreamingService',
        //         as: 'streamName'
        //     },
        // },

        image_url: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
        }
    },
    {
        sequelize,
        freezeTableName: true
    }
);

module.exports = MovieShow;