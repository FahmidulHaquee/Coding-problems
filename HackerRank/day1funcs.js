// Factorial function

function factorial(n) {
  let answer = n;

  while (n !== 1) {
    n = n - 1;
    answer *= n;
  }

  console.log(answer);
}

factorial(5);
