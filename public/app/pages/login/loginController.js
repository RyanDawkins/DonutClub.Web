(function loginControllerJsIife(){

  angular.module('app').controller('loginController', loginController);

  loginController.$inject = ['loginService', '$location', 'toaster'];

  function loginController(loginService, $location, toaster) {

    var vm = this;
    vm.submitSignin = submitSignin;

    function submitSignin() {
      loginService
        .signin(vm.email, vm.password)
        .then(function successfulSignIn(user){
        // Success
        }, function failedSignin(message){
          console.debug(message);
          toaster.pop({
            type: 'error',
            body: message,
          });
        }).catch(function _catch(message){
          console.debug(message);
          toaster.pop({
            type: 'error',
            body: message,
          });
        });
    }
  }

})();
