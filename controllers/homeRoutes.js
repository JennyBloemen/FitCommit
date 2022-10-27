const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// mich - remember to add style attribute with specific css layout for each page (style: 'exercises.css') jass.css or schedule.css -- goes in render section within curly brackets
// also need to change titles for each section (schedule & exercises)


// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      title: 'FitCommit',
      style: 'jass.css',
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