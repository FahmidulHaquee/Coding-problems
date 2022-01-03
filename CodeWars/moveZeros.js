function moveZeros(arr) {
  // 0. Initialise counter variable
  let counter = 0;

  // 1. Iterate through array
  for (let i = 0; i < arr.length; i++) {
    if (counter === arr.length) {
      break;
    }
    // 2. If elements equals 0
    if (arr[i] === 0) {
      arr.splice(i, 1); // 3. Remove the zero
      arr.push(0); // 4. Add zero to the end
      i--;
    }
    counter++; // 5. Increment counter
  }
  return arr;
}

let input = [9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0];
console.log(moveZeros(input));

var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};
