function solution(number) {
  // 1. Initialise storage array
  let arr = [];

  // 2. Handle edge case
  if (number < 0) {
    return 0;
  }

  for (let i = 0; i < number + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push(i);
    } else if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return arr.reduce(reducer);
}

// Problem statement

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0 (for languages that do have them).

// LINK: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

const number = 10;
console.log(solution(number));
