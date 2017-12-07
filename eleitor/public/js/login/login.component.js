(function() {
  'use strict';

  angular
    .module('app')
    .component('login', {
      templateUrl:'/js/login/login.html',
      controller: LoginController,
      controllerAs: 'vm',
      bindings: {
        
      },
    });

  LoginController.$inject = ['LoginService', '$state'];

  function LoginController(LoginService, $state) {
    var vm = this;
    vm.login = login;

    function login(voter) {
      LoginService.login(voter)
        .then(function(response) {
          var user = response.data;
          sessionStorage.setItem('user', JSON.stringify(user));
          $state.go('votacao');
        })
        .catch(function(error) {
          console.error('Unauthorized');
        });
    }

    vm.$onInit = function() { };
    vm.$onChanges = function(changesObj) { };
    vm.$onDestroy = function() { };
  }
})();