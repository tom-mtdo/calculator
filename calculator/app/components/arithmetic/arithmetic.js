'use strict';

angular.module('myApp.arithmetic', [])

.component('arithmetic', {
  templateUrl: 'components/arithmetic/arithmetic.html',
  controller: 'ArithmeticController'
})

.controller('ArithmeticController', [function() {
	this.user = 'world';
	this.operators = ["+", "-", "*", "/", "^", "sqrt"];
	this.regexp = "^[0-9]+[.]?[0-9]*$";
	this.num1 = 0;
	this.ope = this.operators[0];
	this.num2 = 0;
	this.calResult = "Input number(s), select operator, then press Calculate button to see result.";
	
	this.calculate = function(){
		this.calResult = this.calculateImp(this.num1, this.ope, this.num2);
	}

	this.calculateImp = function(num1, ope, num2){
		var strResult = "NaN";
		switch( ope ){
			case "+":
				strResult = this.calSum(num1, num2);
				break;
			case "-":
				strResult = this.calMinus(num1, num2);
				break;
			case "*":
				strResult = this.calTime(num1, num2);
				break;
			case "/":
				strResult = this.calDivide(num1, num2);
				break;
			case "^":
				strResult = this.calPow(num1, num2);
				break;
			case "sqrt":
				strResult = this.calSqrt( Number(num1) );
				break;
			default:
				strResult = "Unknown operator";
		}
		return strResult;
	}
	
	this.calSum = function(num1, num2){
		return (Number(num1) + Number(num2));
	}

	this.calMinus = function(num1, num2){
		return (Number(num1) - Number(num2));
	}

	this.calTime = function(num1, num2){
		return (Number(num1) * Number(num2));
	}

	this.calDivide = function(num1, num2){
		return (Number(num1) / Number(num2));
	}

	this.calPow = function(num1, num2){
		return ( Math.pow(Number(num1), Number(num2)) );
	}
	
	this.calSqrt = function(num1){
		return ( Math.sqrt(Number(num1)) );
	}
	
	this.isNeedNum2 = function(ope){
		return (ope == 'sqrt');	
	}		
}])
;