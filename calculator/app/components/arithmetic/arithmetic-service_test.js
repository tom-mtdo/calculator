describe('arithmeticService', function() {
  var arithmeticService;
  // Load the module before each test
  beforeEach(module('myApp.arithmetic.service'));
  
  beforeEach(inject(function (_arithmeticService_) {
    arithmeticService = _arithmeticService_;
  }));

  // Test the service
  describe('ArithmeticService', function() {

    it('9 + 3 should equal 12', function() {
      expect(arithmeticService.sum(9,3)).toEqual(12);
    });

    it('9 - 3 should equal 6', function() {
      expect(arithmeticService.minus(9,3)).toEqual(6);
    });

    it('9 * 3 should equal 27', function() {
      expect(arithmeticService.time(9,3)).toEqual(27);
    });

    it('9 / 3 should equal 3', function() {
      expect(arithmeticService.divide(9,3)).toEqual(3);
    });

    it('9 ^ 3 should equal 729', function() {
      expect(arithmeticService.pow(9,3)).toEqual(729);
    });

    it('Sqrt of 9 should equal 3', function() {
      expect(arithmeticService.sqrt(9)).toEqual(3);
    });

  });

});

// describe('arithmeticService', function() {

//   // Load the module that contains the `phoneList` component before each test
//   beforeEach(module('myApp.arithmetic.service'));

//   // Test the controller
//   describe('ArithmeticService', function() {

//     it('2 + 3 should equal 5', inject(function(_arithmeticService_) {
//       var arithmeticService = _arithmeticService_;

//       expect(arithmeticService.sum(2,3)).toEqual(5);
//     }));

//   });

// });