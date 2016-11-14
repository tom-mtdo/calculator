'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.viewBasic',
  'myApp.viewAdvance',
  'myApp.version',
  'myApp.arithmetic',
  'myApp.arithmetic.service'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view-basic'});
}]);
