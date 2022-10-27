const sequelize = require('../config/connection');
const { User } = require('../models');
const userDataSeed = require('../seeds/userData');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await userDataSeed();

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
