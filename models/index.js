const User = require("./User");
const Schedule = require("./Schedule");
const Workouts = require("./Workouts");

User.hasMany(Schedule, {
  //may need to be changed to hasone
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Schedule.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Schedule, Workouts };

