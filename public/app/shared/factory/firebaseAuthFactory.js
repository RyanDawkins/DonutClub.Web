(function firebaseAuthFactory(){

  angular.module('app').factory('firebaseAuthFactory', firebaseAuthFactory);

  function firebaseAuthFactory() {

    return {
      signin: signin,
      signout: signout,
      getUser: getUser,
      signup: signup,
    };

    function signin(email, password) {
      // Method to signin using firebase.
      return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    function signout() {
      // Method to signout using firebase.
      return firebase.auth().signOut();
    }

    function getUser() {
      // Method to get the current user, if it is null the user is not signed in.
      return firebase.auth().currentUser;
    }

    function signup(email, password) {
      // Method to sign up a user
      
    }

  }

})();
