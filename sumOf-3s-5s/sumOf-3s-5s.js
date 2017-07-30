// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfThreesFives(max_number) {
  let run = true;
  let sum = 0;
  for (var i = 2; i < max_number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
    if (i >= max_number) {
      run = false;
    }
  }
  return sum;
}
console.log(sumOfThreesFives(1000));
