(function() {
  'use strict';

  angular
    .module('app')
    .service('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService($http) {
    var DISTRIBUIDOR_URL = 'http://localhost:3002';

    function login(voter) {
      return $http.post(DISTRIBUIDOR_URL + '/auth', voter);
    }
    
    return {
      login: login
    }
  }
})();