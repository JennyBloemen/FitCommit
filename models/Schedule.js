const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {}
  
Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    mon: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }, 
    tue: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      }, 
    wed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }, 
    thurs: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }, 
    fri: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }, 
    sat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }, 
    sun: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }, 
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,  
    modelName: 'schedule',
  }
);

module.exports = Schedule;

