const router = require('express').Router();
const { User, Schedule } = require('../../models');
const withAuth = require('../../utils/auth');

 
// updates data on the calendar
// withAuth,
router.put('/', async (req, res) => {
  try {
    const newSchedule = await Schedule.update(
        // want to update the area
        {
          area: req.body.area,
          user_id: req.session.user_id,
        },
        // where the request is for monday
        {
          where: {
            day: req.body.day,
            user_id: req.session.user_id,
          }
        }
    );
    console.log(newSchedule);

    res.status(200).json(newSchedule);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete route for each button 
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

