const sequelize = require("../config/connection");
const { User, Workouts } = require("../models");

const userData = require("./userData.json");
const workoutData = require("./workoutData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);

  await Workouts.bulkCreate(workoutData);
  process.exit(0);
};

seedDatabase();
