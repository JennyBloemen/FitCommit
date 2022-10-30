// const router = require('express').Router();
// const { User, Schedule, userSchedule } = require('../../models');
// const withAuth = require('../../utils/auth');


// // post request to get schedule pulled up 
// // referencing userSchedule (new schedule model)
// // post or put -- try both
// // TA'S WAY ... not finished yet

// // router.put('/schedule', withAuth, async (req, res) => {
//     // try {
//     //   const scheduleData = await Schedule.update({
//     //     where: {
//     //       user_id: req.body.user_id,
//     //       where: {
//     //         // ?? select the day 
//     //       },
//     //     },
//     //     day: req.body.day,
//     //     area: req.body.area,
//     //   });
  
// //       // set up sessions
// //       req.session.save(() => {
// //         req.session.logged_in = true;
// //         // console.log this and try logged_in as well
// //         console.log(req.session);
// //         res.status(200).json(scheduleData);
// //       })
  
// //     } catch (err) {
// //       console.log(err);
// //       res.status(500).json(err);
// //     }
// //   })



// // MY WAY...testing 
//   router.post('/schedule', withAuth, async (req, res) => {
//     try {
//       const scheduleData = await userSchedule.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
  
//       res.status(200).json(scheduleData);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

// //   another way ... testing
// router.put('/schedule', withAuth, async (req, res) => {
//     try {

//         const scheduleData = await userSchedule.update({
//           where: {
//             user_id: req.body.user_id,
            
//           },
//           day: req.body.day,
//           area: req.body.area,
//         });
  
//       res.status(200).json(scheduleData);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });


//   router.delete('/schedule/:id', withAuth, async (req, res) => {
//     try {
//         const scheduleData = await Schedule.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });
//         if (!scheduleData) {
//             // TURN INTO SWAL ALERT???
//             res.status(404).json({ message: 'No schedule found with this id!' });
//             return;
//         }

//         res.status(200).json(scheduleData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
//   });


// module.exports = router;