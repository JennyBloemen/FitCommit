const router = require('express').Router();
const { Schedule } = require('../../models');
const withAuth = require('../../utils/auth');
 
// Updates data on the calendar with the user's input
router.put('/', withAuth, async (req, res) => {
  try {
    const newSchedule = await Schedule.update(
        // Updates the area
        {
          area: req.body.area,
          user_id: req.session.user_id,
        },
        // Where the request matches the day selected
        {
          where: {
            day: req.body.day,
            user_id: req.session.user_id,
          }
        }
    );

    res.status(200).json(newSchedule);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT route to update calendar with an empty string for each delete button 
router.put('/', withAuth, async (req, res) => {
  try {
    const scheduleData = await Schedule.update(
      {
        area: req.body.area,
      },
      {
      where: {
        day: req.body.day,
        user_id: req.session.user_id,
      },
    }
    );

    if (!scheduleData) {
      res.status(404).json({ message: 'No data with this day!' });
      return;
    }

    res.status(200).json(scheduleData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;

