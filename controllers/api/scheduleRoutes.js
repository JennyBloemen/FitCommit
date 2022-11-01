const router = require('express').Router();
const { User, Schedule } = require('../../models');
const withAuth = require('../../utils/auth');

 
// updates data on the calendar
// withAuth,
router.put('/', async (req, res) => {
  console.log(req.body.area);
  console.log(req.body.day);
  try {
    const newSchedule = await Schedule.update(
        // want to update the area
        {
          area: req.body.area
        },
        // where the request is for monday
        {
          where: {
            day: req.body.day,
          }
        }
    );
    console.log(newSchedule);

    res.status(200).json(newSchedule);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DOESN'T WORK YET !!! 
// delete button for day on schedule
// ???????????
router.delete('/', withAuth, async (req, res) => {
  console.log(req.body.area, req.body.day)
  try {
    const scheduleData = await Schedule.destroy(
      {
        area: req.body.area
      },
      {
      where: {
        day: req.body.day,
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

