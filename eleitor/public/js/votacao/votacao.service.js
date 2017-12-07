(function() {
  'use strict';

  angular
    .module('app')
    .service('VotacaoService', VotacaoService);

  VotacaoService.$inject = ['$http'];

  function VotacaoService($http) {
    var ADMINISTRADOR_URL = 'http://localhost:3006';
    var CONTADOR_URL = 'http://localhost:3001';

    function validate(vote) {
      return $http.post(ADMINISTRADOR_URL + '/auth', vote);
    }

    function sendVote(vote) { 
      return validate(vote)
        .then(function() {
          return $http.post(CONTADOR_URL + '/votes', vote);
        });
    }

    return {
      sendVote: sendVote
    }
  }
})();
