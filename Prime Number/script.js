function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function generatePrimeNumbers(limit) {
  let primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

document.addEventListener('DOMContentLoaded', function() {
  const primeForm = document.getElementById('primeForm');
  const primeNumbersDiv = document.getElementById('primeNumbers');

  primeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const limit = parseInt(document.getElementById('limit').value);
    const primeNumbers = generatePrimeNumbers(limit);
    primeNumbersDiv.textContent = primeNumbers.join(', ');
  });
});
