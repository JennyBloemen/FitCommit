const sequelize = require("../config/connection");
const { User, Workouts, Area } = require("../models");

const userData = require("./userData.json");
const workoutData = require("./workoutData.json");
const areaData = require("./areaData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);

  await Area.bulkCreate(areaData);

  await Workouts.bulkCreate(workoutData);
  process.exit(0);
};

seedDatabase();
