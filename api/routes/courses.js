module.exports = (app) => {
  const controller = require("../controllers/coursesController")();

  app.route("/api/v1/courses").get(controller.listCourses);
};
