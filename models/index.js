const User = require("./User");
const Schedule = require("./Schedule");
const Workouts = require("./Workouts");

User.hasMany(Schedule, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Schedule.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Schedule, Workouts };

