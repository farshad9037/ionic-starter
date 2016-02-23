var seeMyMachines = angular.module('seeMyMachines', ['ionic', 'seeMyMachines.services', 'ngToast', 'ngStorage']);

seeMyMachines.config(function($stateProvider, $urlRouterProvider, ngToastProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/sos-home.html',
      controller: 'homeCtrl'
    });

  $urlRouterProvider.otherwise("/");

  ngToastProvider.configure({
    maxNumber: 1,
    animation: 'slide'
  });

});
