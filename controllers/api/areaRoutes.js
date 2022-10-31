const router = require("express").Router();
const { Area, Exer } = require("../../models");

//get all areas
router.get("/exercises", async (req, res) => {
  try {
    const areaData = await Area.findAll({
      include: [{ model: Exer }],
    });

    if (!areaData) {
      res.status(404).json({ message: "No area found with that id" });
      return;
    }
    res.render("exercises", {
      title: "Exercises",
      style: "exercises.css",
    });
    res.status(200).json(areaData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
