describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz()
  });

  describe('multiples of 3', function() {

    it("returns Fizz when passed 3", function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz')
    });

    it("returns Fizz when passed 6", function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz')
    });

  });

  describe('multiples of 5', function() {

    it("returns Buzz when passed 5", function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz')
    });

    it("returns Buzz when passed 10", function(){
      expect(fizzBuzz.play(10)).toEqual('Buzz')
    });

  });

  describe('multiples of 15', function() {

    it("returns FizzBuzz when passed 15", function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz')
    });

    it("returns FizzBuzz when passed 30", function(){
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz')
    });

  });

  describe('other numbers', function() {

    it("returns 7 when passed 7", function() {
      expect(fizzBuzz.play(7)).toEqual(7)
    });

    it("returns 4 when passed 4", function() {
      expect(fizzBuzz.play(4)).toEqual(4)
    });

  });



});
