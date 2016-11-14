'use strict';

angular.module('myApp.viewBasic', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view-basic', {
    templateUrl: 'view-basic/view-basic.html',
    controller: 'ViewBasicCtrl'
  });
}])

.controller('ViewBasicCtrl', [function() {

}]);