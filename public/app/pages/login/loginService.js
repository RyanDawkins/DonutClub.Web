(function loginServiceJsIife(){

  angular.module('app').service('loginService', loginService);

  loginService.$inject = ['firebaseAuthFactory', 'firebaseAuthErrorFactory', 'firebasePromiseFactory'];

  function loginService(firebaseAuthFactory, firebaseAuthErrorFactory, firebasePromiseFactory) {

    // public api
    this.signin = signin;

    function signin(email, password) {
      return firebasePromiseFactory.transform(
          firebaseAuthFactory.signin(email, password)
        )
        .catch(firebaseAuthErrorFactory.decodeErrorFromResponse);
    }

  }

})();
