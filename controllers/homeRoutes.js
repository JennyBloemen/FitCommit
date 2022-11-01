const router = require("express").Router();
const { User, Schedule, Exercise, Workouts } = require("../models");
const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage
router.get("/", (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
    title: "FitCommit",
    style: "jass.css",
  });
});

// get one user's schedule
// withAuth,
router.get("/schedule", async (req, res) => {
  try {
    const scheduleData = await Schedule.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    if (!scheduleData) {
      res.status(404).json({ message: "No schedule for this user!" });
      return;
    }

    const schedule = scheduleData.map((day) => day.get({ plain: true }));
    // console.log(schedule);

    res.render("schedule", {
      schedule,
      logged_in: req.session.logged_in,
      title: "Schedule",
      style: "schedule.css",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Route to render exercises
router.get("/exercises", withAuth, async (req, res) => {
  try {
    const workoutData = await Workouts.findAll().catch((err) => {
      res.json(err);
    });

    const exercises = workoutData.map((exercise) =>
      exercise.get({ plain: true })
    );
    // console.log(exercises);
    res.render("exercises", {
      exercises,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      title: "Exercises",
      style: "exercises.css",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    title: "Login",
    style: "login.css",
  });
});

module.exports = router;
