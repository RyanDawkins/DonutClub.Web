(function loginServiceJsIife(){

  angular.module('app').service('loginService', loginService);

  loginService.$inject = ['$q', 'firebaseAuthFactory', 'firebaseAuthErrorFactory'];

  function loginService($q, firebaseAuthFactory, firebaseAuthErrorFactory) {

    // public api
    this.signin = signin;

    function signin(email, password) {

      // Get the promise from the firebase auth factory.
      var promise = firebaseAuthFactory.signin(email, password);

      // Setup the new promise to wrap the firebase one.
      var deferred = $q.defer();

      promise.then(function success(user){
        deferred.resolve(user);
      }, function error(data){
        var message = firebaseAuthErrorFactory.decodeError(data.code);
        deferred.reject(message);
      });

      // Return our new promise.
      return deferred.promise;
    }

    function signout() {
      return firebaseAuthFactory.signout();
    }

  }

})();
