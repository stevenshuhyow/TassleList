angular.module('tassleList.tasks', [])

.controller('TasksController', function ($scope, $location, Tasks) {


  $scope.data = {};
  $scope.user = {date: new Date()};

  $scope.isActive = function (viewLocation) {
    console.log(viewLocation === $location.path());
    console.log($location.path())
      return viewLocation === $location.path();
  };

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

  $scope.finishedTask = function(index){
    var value = $scope.data.tasks[index]
    var finished = $scope.data.tasks.splice(index,1)
    Tasks.finishedTasks({value})
  }


  $scope.changeClass = function(){
    if ($scope.class === "red")
      $scope.class = "blue";
    else
      $scope.class = "red";
  };
});