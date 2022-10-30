// const User = require("./User");
// const Area = require("./Area");
// const Exercise = require("./Exercise");
// const userSchedule = require("./userSchedule");

// User.hasMany(userSchedule, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// userSchedule.belongsTo(User, {
//   foreignKey: "user_id"
// });

// Area.hasMany(Exercise, {
//   foreignKey: "area_id",
//   onDelete: "CASCADE",
// });

// User.hasMany(Exercise, {
//   foreignKey: "exercise_id",
//   onDelete: "CASCADE",
// });

// Exercise.belongsTo(User, {
//   foreignKey: "exercise_id",
// });

// module.exports = { User, userSchedule, Exercise };


const User = require("./User");
const Schedule = require("./Schedule");
const Area = require("./Area");
const Workouts = require("./Workouts");


User.hasMany(Schedule, {
  //may need to be changed to hasone
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Schedule.belongsTo(User, {
  foreignKey: "user_id",
});

Area.hasMany(Workouts, {
  foreignKey: "area_id",
  onDelete: "CASCADE",
});

Workouts.belongsTo(Area, {
  foreignKey: "area_id",
});

module.exports = { User, Schedule, Workouts, Area };
