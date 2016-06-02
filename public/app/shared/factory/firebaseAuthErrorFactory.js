(function firebaseAuthErrorFactoryIife(){

  angular.module('app').factory('firebaseAuthErrorFactory', firebaseAuthErrorFactory);

  firebaseAuthErrorFactory.$inject = [];

  function firebaseAuthErrorFactory() {

    return {
      decodeError: decodeError,
      decodeErrorFromResponse: decodeErrorFromResponse,
    };

    function decodeError(error) {

      switch(error) {
        case "auth/invalid-email":
          return "Invalid email address";
        case "auth/user-disabled":
          return "The account has been disabled.";
        case "auth/user-not-found":
          return "The user does not exist";
        case "auth/wrong-password":
          return "Incorrect email/password combo. Please try again."
      }

    }

    function decodeErrorFromResponse(response) {
      var response = decodeError(response.code); console.debug(response); return response;
    }

  }

})();
