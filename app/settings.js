(function settingsIife(){

  angular.module('app').factory('appSettings', appSettings);

  function appSettings() {
    return {
      passwordLength: 6,
    };
  }

})();
