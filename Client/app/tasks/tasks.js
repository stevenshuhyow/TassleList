angular.module('tassleList.tasks', [])

.controller('TasksController', function ($scope, $location, Tasks) {


  $scope.data = {};
  $scope.user = {date: new Date()};

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

  $scope.addTask = function(){
    console.log('inside of addTask')
    Tasks.addTask($scope.user)
    .then(function(){
      $location.path('/task');
    })
    .catch(function(error){
      console.log(error);
    })
  }
});