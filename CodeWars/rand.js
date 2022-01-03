const parens = "())(()";
let tracker = 0;

for (let bracket in parens) {
  // For every (, we need a )
  // If a ) shows itself before a complementary (
  // Return false

  if (bracket === "(") {
    tracker++;
  } else if (bracket === ")" && tracker === 0) {
    return false;
  } else if (bracket === ")") {
    tracker--;
  }
  console.log(tracker);
}
