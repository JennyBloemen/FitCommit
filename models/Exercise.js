const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Exercise extends Model {}

Exercise.init(
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
    area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    chest: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    
    // exercise_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true, //need to look up
    modelName: "exercise",
  }
);

module.exports = Exercise;
