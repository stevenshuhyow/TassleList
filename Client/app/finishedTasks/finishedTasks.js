angular.module('tassleList.finishedTasks', [])

.controller('FinishedTasksController', function ($scope, $location, Tasks) {

  $scope.data = {};

  $scope.finishedPopulate = function() {
    console.log(Tasks);
    Tasks.populate()
    .then(function (tasks) {
      $scope.data.tasks = tasks;
      console.log($scope.data.tasks)
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.finishedPopulate();

})

