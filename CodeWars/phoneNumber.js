function createPhoneNumber(numbers) {
  // Write a function that accepts an array of 10 integers (between 0 and 9)
  // Returns a string of those numbers in the form of a phone number.
  // e.g. createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

  // 1. Declare and initialise string

  let phoneNumber = "(";

  // 2. Iterate through array

  for (let char of numbers) {
    phoneNumber += toString(char);
  }
}
