(function signupService(){

  angular.module('app').service('signupService', signupService);

  signupService.$inject = ['firebaseAuthFactory', 'firebaseAuthErrorFactory', 'firebasePromiseFactory'];

  function signupService(firebaseAuthFactory, firebaseAuthErrorFactory, firebasePromiseFactory) {

    this.signup = signup;

    function signup(email, password) {
      return firebasePromiseFactory.transform(
        firebaseAuthFactory.signup(email, password)
      ).catch(firebasePromiseFactory.decodeErrorFromResponse);
    }

  }

})();
