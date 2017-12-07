(function() {
  'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['DashboardService', '$scope'];

  function DashboardController(DashboardService, $scope) {
    var vm = this;
    var CONTADOR_URL = 'http://localhost:3001';
    var socket = io(CONTADOR_URL);

    function buildCandidate(candidate) {
      return Object.assign({}, candidate, { votes: 0 });
    }

    function incrementVote(candidateId, candidates) {
      var candidateIndex = candidates.findIndex(function(candidate) {
        return candidate.id === candidateId;
      });

      if (candidateIndex !== -1) {
        var candidate = candidates[candidateIndex];
        candidate.votes += 1;
        candidates[candidateIndex] = candidate;
      }
      return candidates;
    }

    function findCandidates() {
      return DashboardService.findCandidates()
        .then(function(candidatesResponse) {
          var candidates = candidatesResponse.map(buildCandidate);
          vm.candidates = candidates;
        });
    }

    socket.on('votes.increment', (vote) => {
      $scope.$apply(function() {
        var candidateId = vote.candidate;
        vm.candidates = incrementVote(candidateId, vm.candidates);
      });
    });
   
    function activate() { 
      findCandidates();      
    }
    activate();
  }
})();