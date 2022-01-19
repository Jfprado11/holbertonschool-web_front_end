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
countPrimeNumbers();
console.log(countPrimeNumbers());
const t1 = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);
