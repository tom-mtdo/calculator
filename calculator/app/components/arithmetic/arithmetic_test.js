describe('arithmetic', function() {

  // Load the module component before each test
  beforeEach(module('myApp.arithmetic'));

  // Test the controller
  describe('ArithmeticController', function() {

    it('There should be 6 operators for a arithmetic calculator', inject(function($componentController) {
      var ctrl = $componentController('arithmetic');

      expect(ctrl.operators.length).toBe(6);
    }));

  });

});