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
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chest: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    shoulders: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    abs: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    quads: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    glutes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    hamstrings: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    back: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    biceps: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    triceps: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "workouts",
  }
);

module.exports = Workouts;
