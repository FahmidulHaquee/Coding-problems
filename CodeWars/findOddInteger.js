function findOdd(A) {
  // 1. Create an object
  // Property is the integer
  // Property value is the frequency

  const intObject = {};

  // 2. Iterate through the array
  for (let num of A) {
    // 3. Check if the property exists
    if (!intObject.hasOwnProperty(num)) {
      intObject[num] = 1;
    } else {
      intObject[num]++;
    }
  }
  // 4. Iterate and find odd int
  for (const num in intObject) {
    if (intObject[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
}
