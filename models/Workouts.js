const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Workouts extends Model {}

Workouts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    exercise: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true, //need to look up
    modelName: "workouts",
  }
);

module.exports = Workouts;
