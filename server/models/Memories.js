const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Memories extends Model {}

Memories.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: 'Anonymous'
        },
        memory: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'memories',
    }
);

module.exports = Memories;