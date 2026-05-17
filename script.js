// factorial
const factorial = (n) => {
  if (n < 0) {
    return "undefined";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

for(let i = 0; i <= 5; i++) {
  console.log(`Factorial of ${i} is ${factorial(i)}`);
}
