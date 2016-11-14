describe('arithmetic', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('myApp.arithmetic'));

  // Test the controller
  describe('ArithmeticController', function() {

    it('should create a user name world, has length = 5', inject(function($componentController) {
      var ctrl = $componentController('arithmetic');

      expect(ctrl.user.length).toBe(5);
    }));

  });

});