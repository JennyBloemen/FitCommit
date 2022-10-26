const User = require('./User');
const Schedule = require('./Schedule');
const Area = require('./Area');
const Workouts = require('./Workouts');

User.hasMany(Schedule, {    //may need to be changed to hasone
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    });
  
Schedule.belongsTo(User, {
    foreignKey: 'user_id'
    });

Area.hasMany(Workouts, {
    foreignKey: 'area_id',
    onDelete: 'CASCADE'
   })

Workouts.belongsTo(Area, {
    foreignKey: 'area_id',
})

module.exports = { User, Schedule };
  
