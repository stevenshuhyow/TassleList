angular.module('tassleList.services', [])

.factory('Tasks', function ($http) {

  var addTask = function(task){
    return $http({
      method: 'POST',
      url: 'api/tasks'
    })
    .then(function(resp){
      return resp.data;
    });
  }

  var taskList = function(){
    return $http({
      method: 'GET',
      url: 'api/tasks'
    })
    .then(function(resp){
      return resp.data;
    });
  };

  return {
    addTask: addTask
    taskLis: taskList
  }

});


.factory('Auth', function ($http, $location, $window) {

  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
