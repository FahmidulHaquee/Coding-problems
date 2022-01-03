function validParentheses(parens) {
  // 1. Check if first is closing bracket

  if (parens[0] === ")") {
    return false;
  } // 2. Check if last is opening bracket
  else if (parens[parens.length - 1] === "(") {
    return false;
  } else if (parens.length === 1) {
    return false;
  } else if (parens === "") {
    return true;
  }

  // 3. Create lists of parentheses
  const parensArray = parens.split("");
  const openingBrackets = parensArray.filter((char) => char === "(");
  const closingBrackets = parensArray.filter((char) => char === ")");

  if (openingBrackets.length !== closingBrackets.length) {
    return false;
  }

  for (let bracket in parens) {
    // For every (, we need a )
    // If a ) shows itself before a complementary (
    // Return false

    let tracker = 0;
    if (bracket === "(") {
      tracker++;
    } else if (bracket === ")" && tracker === 0) {
      return false;
    } else if (bracket === ")") {
      tracker--;
    }
  }
}

let input = "";
console.log(validParentheses(input));
