'use strict';

describe('myApp.viewBasic module', function() {

  beforeEach(module('myApp.viewBasic'));

  describe('view basic controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var viewBasicCtrl = $controller('ViewBasicCtrl', { $scope: $scope});
      expect(viewBasicCtrl).toBeDefined();
    }));

  });
});