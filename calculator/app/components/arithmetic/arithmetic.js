'use strict';

angular.module('myApp.arithmetic', [
	'myApp.arithmetic.service'
])

.component('arithmetic', {
  templateUrl: 'components/arithmetic/arithmetic.html',
  controller: 'ArithmeticController'
})

.controller('ArithmeticController', ['arithmeticService', function(arithmeticService) {
	this.operators = ["+", "-", "*", "/", "^", "sqrt"];
	this.regexp = "^[0-9]+[.]?[0-9]*$";
	this.num1 = 0;
	this.ope = this.operators[0];
	this.num2 = 0;
	this.calResult = "Input number(s), select operator, then press Calculate button to see result.";

	this.calculate = function(){
		switch( this.ope ){
			case "+":
				this.calResult = arithmeticService.sum(this.num1, this.num2);
				break;
			case "-":
				this.calResult = arithmeticService.minus(this.num1, this.num2);
				break;
			case "*":
				this.calResult = arithmeticService.time(this.num1, this.num2);
				break;
			case "/":
				this.calResult = arithmeticService.divide(this.num1, this.num2);
				break;
			case "^":
				this.calResult = arithmeticService.pow(this.num1, this.num2);
				break;
			case "sqrt":
				this.calResult = arithmeticService.sqrt( Number(this.num1) );
				break;
			default:
				this.calResult = "Unknown operator";
		}
	}
		
	this.isNeedNum2 = function(){
		return !(this.ope.localeCompare("sqrt") == 0);	
	}		
}])
;