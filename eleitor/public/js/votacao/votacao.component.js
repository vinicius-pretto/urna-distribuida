(function() {
  'use strict';

  angular
    .module('app')
    .component('votacao', {
      templateUrl: '/js/votacao/votacao.html',
      controller: VotacaoController,
      controllerAs: 'vm',
      bindings: {
        
      },
    });

  VotacaoController.$inject = ['CandidateService'];

  function VotacaoController(CandidateService) {
    var vm = this;
    vm.pressNumber = pressNumber;
    vm.correct = correct;
    vm.candidatePicture = '';
    vm.startNumber;
    vm.endNumber;
    vm.candidateSelected = {};

    function pressNumber(number) {
      if (!vm.startNumber) {
        vm.startNumber = String(number);
      } 
      else if (!vm.endNumber) {
        vm.endNumber = String(number);
      }
      onSelectCandidate();
    }

    function correct() {
      if (vm.endNumber) {
        vm.endNumber = null;
      }
      else if (vm.startNumber) {
        vm.startNumber = null;
      }
      vm.candidateSelected = {};
    }

    function findByCandidateNumber(candidates) {
      var candidateNumber = vm.startNumber + vm.endNumber;
      return candidates.find(function(candidate) {
        return candidate.number === Number(candidateNumber);
      });
    }

    function onSelectCandidate() {
      if (vm.startNumber && vm.endNumber) {
        vm.candidateSelected = findByCandidateNumber(vm.candidates);
      }
    }

    function findCandidates() {
      CandidateService.findAll()
        .then(function(candidates) {
          vm.candidates = candidates;
        });
    }

    vm.$onInit = function() { 
      findCandidates();
    };
    vm.$onChanges = function(changesObj) {};
    vm.$onDestroy = function() { };
  }
})();