const router = require('express').Router();
const { User, Schedule, userSchedule,  Exercise } = require('../models');
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
router.get('/schedule:id', withAuth, async (req, res) => {
try {
  const scheduleData = await userSchedule.findByPk(req.params.id, {
    attributes: { exclude: ['password'] },
    include: [
      {
        model: User,
        attributes: [
          'name',
          'day',
          'area',
      ],
        // order: [['name', 'ASC']],
      }
    ]
  });

  const schedule = scheduleData.get({ plain: true });

  res.render('schedule', {
    ...schedule,
    logged_in: true,
    title: 'Schedule',
    style: 'schedule.css',
  });
} catch (err) {
  res.status(500).json(err);
}
});


// Route to render exercises
router.get('/exercises', withAuth, async (req, res) => {
try {
    const exerciseData = await Exercise.findAll({
      include: [
      {
        attributes: [
          'exercise',
          'area',
          'chest',
        ],
      }
    ]
  });

  const exercises = exerciseData.map((exercise) => exercise.get({ plain: true }));

  console.log(exercises);
  res.render('exercises', {
    exercises,
    // Pass the logged in flag to the template
    logged_in: true,
    title: 'Exercises',
    style: 'exercises.css',
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    title: 'Login',
    style: 'login.css',
  });
});

module.exports = router;