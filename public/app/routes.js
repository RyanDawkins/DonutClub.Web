(function routesJsIife(){

  angular.module('app').config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {

    $routeProvider.when('/', {
      controller: 'dashController',
      controllerAs: 'vm',
      templateUrl: '/app/pages/dash/dash.html',
    });

    $routeProvider.when('/login', {
      controller: 'loginController',
      controllerAs: 'vm',
      templateUrl: '/app/pages/login/login.html',
    });

    $routeProvider.when('/signup', {
      controller: 'signupController',
      controllerAs: 'vm',
      templateUrl: '/app/pages/signup/signup.html',
    });

  }

})();
