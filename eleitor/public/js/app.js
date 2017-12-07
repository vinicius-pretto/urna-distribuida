(function() {
  'use strict';

  angular.module('app', [
    'ui.router'
  ])
  .config(function($stateProvider) {
    var loginState = {
      name: 'login',
      url: '/',
      component: 'login'
    }
  
    var votacaoState = {
      name: 'votacao',
      url: '/votacao',
      templateUrl: '/js/votacao/votacao.html'
    }
  
    $stateProvider.state(loginState);
    $stateProvider.state(votacaoState);
  });
})();