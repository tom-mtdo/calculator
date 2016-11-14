'use strict';

angular.module('myApp.arithmetic.service', [])

.service('arithmeticService', function() {
    this.sum = function (x,y) {
        return (Number(x) + Number(y));
    }
	this.minus = function(x, y){
		return (Number(x) - Number(y));
	}

	this.time = function(x, y){
		return (Number(x) * Number(y));
	}

	this.divide = function(x, y){
		return (Number(x) / Number(y));
	}

	this.pow = function(x, y){
		return ( Math.pow(Number(x), Number(y)) );
	}
	
	this.sqrt = function(x){
		return ( Math.sqrt(Number(x)) );
	}
})
;