const User = require("./User");
// const Area = require("./Area");
const Exercise = require("./Exercise");
const userSchedule = require("./userSchedule");

User.hasMany(userSchedule, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

userSchedule.belongsTo(User, {
  foreignKey: "user_id"
});

// Area.hasMany(Exercise, {
//   foreignKey: "area_id",
//   onDelete: "CASCADE",
// });

User.hasMany(Exercise, {
  foreignKey: "exercise_id",
  onDelete: "CASCADE",
});

Exercise.belongsTo(User, {
  foreignKey: "exercise_id",
});

module.exports = { User, userSchedule, Exercise };
