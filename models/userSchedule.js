const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class userSchedule extends Model {}
  
userSchedule.init(
  {
    mon: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    }, 
    tue: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      }, 
    wed: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    }, 
    thurs: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    }, 
    fri: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    }, 
    sat: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    }, 
    sun: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
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
    modelName: 'userschedule',
  }
);

module.exports = userSchedule;
