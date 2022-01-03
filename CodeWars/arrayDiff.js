function arrayDiff(a, b) {
  // 1. Edge cases
  if (a === []) {
    return a;
  }

  // 2. Iterate through a and b
  for (let value of b) {
    while (a.includes(value)) {
      const index = a.indexOf(value); // Find index of element
      a.splice(index, 1); // Remove all elements
    }
  }

  // 3. Return a
  return a;
}

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}
