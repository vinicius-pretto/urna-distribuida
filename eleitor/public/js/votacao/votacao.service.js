(function() {
  'use strict';

  angular
    .module('app')
    .service('VotacaoService', VotacaoService);

  VotacaoService.$inject = ['$http'];

  function VotacaoService($http) {
    var ADMINISTRADOR_URL = 'http://localhost:3006';

    function validate(voter) {
      return $http.post(ADMINISTRADOR_URL + '/auth', voter);
    }

    return {
      validate: validate
    }
  }
})();
