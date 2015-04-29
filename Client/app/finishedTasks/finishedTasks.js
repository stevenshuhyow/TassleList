angular.module('tassleList.finishedTasks', [])

.controller('FinishedTasksController', function ($scope, $location, Tasks) {

  $scope.isActive = function (viewLocation) {
    console.log(viewLocation === $location.path())
      return viewLocation === $location.path();
  };


  $scope.data = {};

  $scope.finishedPopulate = function() {
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

