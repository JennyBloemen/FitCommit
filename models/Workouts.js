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
    area_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Area",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true, //converts camel case to underscore
    modelName: "workouts",
  }
);

module.exports = Workouts;
