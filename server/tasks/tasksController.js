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
    var id = req.body.value._id;

    Task.findOneAndRemove({_id: id}, function(err){
      if(err){
        throw (err)
      }
      console.log("user deleted")
    });

    console.log("id id here", id)

    // var finished = req.body;

    // var task = req.body.task;
    // var date = req.body.date;

    // // var finishedTask = {
    // //   user: "steven",
    // //   task: task,
    // //   date: date
    // // };

    // console.log(task)
    // cnosole.log(date)


    // var createFinishedTask = Q.bind(FinishedTask.create, FinishedTask)

    // createFinishedTask(finishedTask)
    // .then(function(createFinishedTask){
    //   if(createFinishedTask){
    //     res.json(createFinishedTask);
    //   }
    // })
    // .fail(function (error) {
    //   next(error);
    // })
  }

}