module.exports = () => {
  const coursesDB = require("../data/courses.json");
  const controller = {};

  controller.listCourses = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(coursesDB);
  };

  return controller;
};
