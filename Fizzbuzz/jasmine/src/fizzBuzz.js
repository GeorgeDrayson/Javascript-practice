function FizzBuzz() {}

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy15(number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy5(number)) {
    return 'Buzz';
  } else if (this._isDivisibleBy3(number)) {
    return 'Fizz';
  } else {
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

FizzBuzz.prototype._isDivisibleBy15 = function(number) {
  return this._isDivisibleBy(15, number);
}

FizzBuzz.prototype._isDivisibleBy5 = function(number) {
  return this._isDivisibleBy(5, number);
}

FizzBuzz.prototype._isDivisibleBy3 = function(number) {
  return this._isDivisibleBy(3, number);
}

var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
