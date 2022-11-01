const sequelize = require("../config/connection");
const { User, Workouts, Schedule } = require("../models");

const userData = require("./userData.json");
const workoutData = require("./exerciseData.json");
const scheduleData = require("./userScheduleData.json");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Schedule.bulkCreate(scheduleData);

  await Workouts.bulkCreate(workoutData);

  process.exit(0);
};

seedDatabase();