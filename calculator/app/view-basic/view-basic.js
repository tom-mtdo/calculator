'use strict';

angular.module('myApp.viewBasic', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view-basic', {
    templateUrl: 'view-basic/view-basic.html',
    controller: 'ViewBasicCtrl'
  });
}])

// .controller('ViewBasicCtrl', [function() {
.controller('ViewBasicCtrl', ['$scope', function($scope) {
	$scope.operators = ["+", "-", "*", "/", "^", "sqrt"];
	$scope.regexp = "^[0-9]+[.]?[0-9]*$";
	$scope.num1 = 0;
	$scope.ope = $scope.operators[0];
	$scope.num2 = 0;
	$scope.calResult = "Input number(s), select operator, then press Calculate button to see result.";
	
	$scope.calculate = function(){
		$scope.calResult = $scope.calculateImp($scope.num1, $scope.ope, $scope.num2);
	}

	$scope.calculateImp = function(num1, ope, num2){
		var strResult = "NaN";
		switch( ope ){
			case "+":
				strResult = $scope.calSum(num1, num2);
				break;
			case "-":
				strResult = $scope.calMinus(num1, num2);
				break;
			case "*":
				strResult = $scope.calTime(num1, num2);
				break;
			case "/":
				strResult = $scope.calDivide(num1, num2);
				break;
			case "^":
				strResult = $scope.calPow(num1, num2);
				break;
			case "sqrt":
				strResult = $scope.calSqrt( Number(num1) );
				break;
			default:
				strResult = "Unknown operator";
		}
		return strResult;
	}
	
	$scope.calSum = function(num1, num2){
		return (Number(num1) + Number(num2));
	}

	$scope.calMinus = function(num1, num2){
		return (Number(num1) - Number(num2));
	}

	$scope.calTime = function(num1, num2){
		return (Number(num1) * Number(num2));
	}

	$scope.calDivide = function(num1, num2){
		return (Number(num1) / Number(num2));
	}

	$scope.calPow = function(num1, num2){
		return ( Math.pow(Number(num1), Number(num2)) );
	}
	
	$scope.calSqrt = function(num1){
		return ( Math.sqrt(Number(num1)) );
	}
	
	$scope.isNeedNum2 = function(ope){
		return (ope == 'sqrt');	
	}	
}]);