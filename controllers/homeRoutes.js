const router = require('express').Router();
const { User, Schedule } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', (req, res) => {

  res.render('homepage', {

    title: 'FitCommit',
    style: 'jass.css',
  });
});


// attempted to edit this route, still not working
// Route to render the users workout schedule
router.get('/schedule', withAuth, async (req, res) => {
// try {
//   const scheduleData = await Schedule.findByPk(req.params.user_id, {
//     attributes: { exclude: ['password'] },
//     include: [
//       {
//         model: User,
//         attributes: ['name'],
//         // order: [['name', 'ASC']],
//       }
//     ]
//   });

//   const schedule = scheduleData.get({ plain: true });

  res.render('schedule', {
    // ...schedule,
    // logged_in: true,
    title: 'Schedule',
    style: 'schedule.css',
  });
// } catch (err) {
//   res.status(500).json(err);
// }
});


// // Route to render exercises
router.get('/exercises', withAuth, async (req, res) => {
try {
  const userData = await User.findAll({
    attributes: { exclude: ['password'] },
    order: [['name', 'ASC']],
  });

  const users = userData.map((project) => project.get({ plain: true }));

  res.render('exercises', {
    User,
    // Pass the logged in flag to the template
    logged_in: req.session.logged_in,
    title: 'Exercises',
    style: 'exercises.css',
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login', {
    title: 'Login',
    style: 'login.css',
  });
});

module.exports = router;