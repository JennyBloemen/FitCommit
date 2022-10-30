const sequelize = require("../config/connection");
const { User, Exercise, userSchedule, Area } = require("../models");

const userData = require("./userData.json");
const exerciseData = require("./exerciseData.json");
const areaData = require("./areaData.json");
const userScheduleData = require("./userScheduleData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // await Area.bulkCreate(areaData);


  await Exercise.bulkCreate(exerciseData);


  // randomly generates exercise_id to link exercise data to the user
  // for (const exercise of exerciseData) {
  //   await Exercise.create({
  //     ...exercise,
  //     exercise_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  // randomly generates user_id for each user
  for (const schedule of userScheduleData) {
    await userSchedule.create({
      ...schedule,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
