(function() {
  'use strict';

  angular
    .module('app')
    .service('CandidateService', CandidateService);

  CandidateService.$inject = ['$http'];

  function CandidateService($http) {
    var DISTRIBUIDOR_URL = 'http://localhost:3002';

    function findAll() {
      return $http.get(DISTRIBUIDOR_URL + '/candidates')
        .then(function(response) {
          return response.data.candidates;
        });
    }

    return {
      findAll: findAll
    }
  }
})();