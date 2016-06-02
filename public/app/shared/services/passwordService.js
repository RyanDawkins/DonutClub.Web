(function passwordServiceIife(){

  angular.module('app').service('passwordService', passwordService);

  passwordService.$inject = ['appSettings'];

  function passwordService(appSettings) {

    // Public api
    this.confirmPasswords = confirmPasswords;
    this.checkLength = checkLength;

    function confirmPasswords(password, passwordConfirm) {
      if(password === passwordConfirm) {
        return true;
      }
      throw "Passwords don't match";
    }

    function checkLength(password) {
      return password.length === appSettings.passwordLength;
    }

  }

})();
