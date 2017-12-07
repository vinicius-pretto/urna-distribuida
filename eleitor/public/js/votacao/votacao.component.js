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

  VotacaoController.$inject = ['CandidateService', 'VotacaoService'];

  function VotacaoController(CandidateService, VotacaoService) {
    var vm = this;
    vm.pressNumber = pressNumber;
    vm.correct = correct;
    vm.confirmVote = confirmVote;
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

    function getCandidateNumber() {
      var candidateNumber = vm.startNumber + vm.endNumber;
      return Number(candidateNumber);
    }

    function findByCandidateNumber(candidates) {
      var candidateNumber = vm.startNumber + vm.endNumber;
      return candidates.find(function(candidate) {
        return candidate.number === getCandidateNumber();
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

    function confirmVote() {
      var user = JSON.parse(window.sessionStorage.getItem('user'));
      var candidate = getCandidateNumber();

      if (candidate.toString().length === 2) {
        var vote = {
          candidate: candidate,
          voter: user.id,
          date: new Date().toISOString()
        }
        return VotacaoService.sendVote(vote)
          .then(function() {
            alert('Voto realizado com sucesso!');
          })
          .catch(function() {
            alert('Voto inválido');
          });
      }
    }

    vm.$onInit = function() { 
      findCandidates();
    };
    vm.$onChanges = function(changesObj) {};
    vm.$onDestroy = function() { };
  }
})();