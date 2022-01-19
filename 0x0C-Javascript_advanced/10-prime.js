function countPrimeNumbers() {
  let count = 0;
  for (let prime = 2; prime <= 100; prime++) {
    let isPrime = true;
    for (let i = 2; i < prime; i++) {
      if (prime % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
}
const t0 = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
const t1 = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds.`
);
