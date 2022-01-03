function squareDigits(num) {
  // input is integer, output is integer
  let sqrNums = "";
  let strNum = num.toString();
  // for loop, square each digit
  for (let char of strNum) {
    let intNum = parseInt(char);
    sqrNums += (intNum ** 2).toString();
  }
  return parseInt(sqrNums);
}
