angular.module('tassleList.tasks',[])

.controller('tassleListController', function ($scope, Tasks){

  $scope.addTask = function(){
    $scopes.addTask($scope.task);


  }

})