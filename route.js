

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/login.html',
        controller: 'loginCntrl'
      }).
      when('/superuser', {
        templateUrl: 'pages/superuser.html',
        controller: 'User'
      }).
     when('/user',{
         templateUrl: 'pages/user.html',
        controller: 'User'
    }).
      otherwise({
        redirectTo: '/',
       
      });
  }]);
