var tasksController = require('./tasksController.js')

module.exports = function (app) {

  app.route('/')
    .get(tasksController.populateFinishedTasks)
    .post(tasksController.addFinishedTasks);
};
