angular.module('tassleList.finnishedTasks', [])

.controller('FinishedTasksController', function ($scope, $location, Tasks) {

  $scope.data = {};
  $scope.user = {date: Date.now()};

  $scope.populate = function () {
    Tasks.getAll()
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