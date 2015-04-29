angular.module('tassleList.services', [])

.factory('Tasks', function ($http) {
  // Your code here

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/tasks'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addTask = function (task) {
    console.log('task', task)
    return $http({
      method: 'POST',
      url: '/api/tasks',
      data: task
    })
    .then(function (resp){
      return resp.data;
    });
  };

  var populate = function() {
    console.log('inside of populate');
    return $http({
      method: 'GET',
      url: '/api/finishedTasks'
    })
    .then(function(resp){
      return resp.data;
    });
  };

  var finishedTasks = function(element) {
    console.log("submitting get request with id:", element)
    return $http({
      method: 'POST',
      url: '/api/finishedTasks',
      data: element
    })
    .then(function (resp) {
      console.log("resp:  inside of finishedTasks", resp);
      return resp.data;
    });
  };

  return {
    getAll: getAll,
    addTask: addTask,
    finishedTasks: finishedTasks,
    populate:  populate
  };
})



.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
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
