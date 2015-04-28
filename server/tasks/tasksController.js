var Task    = require('./tasksModel.js'),
    FinishedTask = require('./finishedTasksModel.js'),
    Q       = require('q');


module.exports = {

  allTasks: function (req, res, next) {
    var findAll = Q.nbind(Task.find, Task);
    console.log('inside of ALLTASKS')

    findAll({})
      .then(function (tasks) {
        res.json(tasks);
      })
      .fail(function (error) {
        next(error);
      });
  },

  newTask: function (req, res, next) {
    var task = req.body.task;
    var date = req.body.date;

    var createTask = Q.nbind(Task.create, Task);

    var newTask = {
      user: "steven",
      task: task,
      date: date
    };

    createTask(newTask)
    .then(function (createdTask) {
      if (createdTask) {
        res.json(createdTask);
      }
    })
    .fail(function (error) {
      next(error);
    })
  },

  populateFinishedTasks: function (req, res, next) {
    // var findAll = Q.nbind(FinishedTask.find, FinishTask);
    // console.log('inside of ALLTASKS')

    // findAll({})
    //   .then(function (tasks) {
    //     res.json(tasks);
    //   })
    //   .fail(function (error) {
    //     next(error);
    //   });
  },

  addFinishedTasks: function (req, res, next){
    // Task.findOneAndRemove
    console.log('inside of addFinishedTasks');
    // var createTask = Q.nbind(Task.create, Task);
    console.log('TASK LIST------------------',Task)


  }

}