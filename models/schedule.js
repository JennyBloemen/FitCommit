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
    day: {
      type: DataTypes.STRING,
      allowNull: false,
      
    }, 
    area: {
      type: DataTypes.STRING,
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
    underscored: true,  //need to look up
    modelName: 'schedule',
  }
);

module.exports = Schedule;
