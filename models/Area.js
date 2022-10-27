const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Area extends Model {}

Area.init(
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true, //need to look up
    modelName: "area",
  }
);

module.exports = Area;
