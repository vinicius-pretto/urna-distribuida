(function() {
  'use strict';

  angular
    .module('app')
    .service('DashboardService', DashboardService);

  DashboardService.$inject = ['$http'];

  function DashboardService($http) {
    var CONTADOR_URL = 'http://localhost:3001';

    function findCandidates() {
      return $http.get(CONTADOR_URL + '/candidates')
        .then(function(response) {
          return response.data.candidates;
        });
    }

    return {
      findCandidates: findCandidates
    }
  }
})();