'use strict';

angular.module('myApp.viewAdvance', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view-advance', {
    templateUrl: 'view-advance/view-advance.html',
    controller: 'ViewAdvanceCtrl'
  });
}])

.controller('ViewAdvanceCtrl', [function() {

}]);