(function() {
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['LoginService'];

  function LoginController(LoginService) {
    var vm = this;
    vm.login = login;

    function login(voter) {
       LoginService.login(voter)
        .then(function() {
          console.log('Authorized');
        })
        .catch(function(error) {
          console.log('Unauthorized');
        });
    }
    
    function activate() { 
      
    }

    activate();
  }
})();