angular.module('tassleList.finishedTasks', [])

.controller('FinishedTasksController', function ($scope, $location, Tasks) {

  $scope.data = {};

  $scope.populate = function () {
    Tasks.finishedTasks()
    .then(function (tasks) {
      $scope.data.tasks = tasks;
      console.log($scope.data.tasks)
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.populate();

})