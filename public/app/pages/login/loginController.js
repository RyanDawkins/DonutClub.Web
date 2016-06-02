(function loginControllerJsIife(){

  angular.module('app').controller('loginController', loginController);

  loginController.$inject = ['loginService', '$location', 'toaster'];

  function loginController(loginService, $location, toaster) {

    var vm = this;
    vm.submitSignin = submitSignin;
    vm.signout = signout;

    function submitSignin() {

      var promise = loginService.signin(vm.email, vm.password);

      promise.then(function successfulSignIn(user){
        // Success
      }, function failedSignin(message){
        console.debug(message);
        toaster.pop({
          type: 'error',
          body: message,
        });
      });
    }
  }

})();
