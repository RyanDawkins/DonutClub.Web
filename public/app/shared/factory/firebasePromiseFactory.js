(function firebasePromiseFactoryIife(){

  angular.module('app').factory('firebasePromiseFactory', firebasePromiseFactory);

  firebasePromiseFactory.$inject = ['$q'];

  function firebasePromiseFactory($q) {

    return {
      transform: transform,
    };

    function transform(promise) {

      // Create deferred
      var deferred = $q.defer();

      // Wrap promise with $q promise.
      promise.then(function success(data){
        return deferred.resolve(data);
      }, function error(error){
        return deferred.reject(error);
      }).catch(function _catch(error){
        return deferred.reject(error);
      });

      return deferred.promise;
    }

  }

})();
