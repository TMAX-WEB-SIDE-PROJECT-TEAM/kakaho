// 소수 계산기.
const PrimeInput = document.querySelector(".prime-input");
const PrimeCompute = document.querySelector(".prime-compute");
const PrimeResult = document.querySelector(".prime-result");

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function findLargestPrimeSmallerThan(n) {
  for (let i = n - 1; i >= 2; i--) {
    if (isPrime(i)) {
      return i;
    }
  }

  return null;
}

PrimeCompute.addEventListener("click", () => {
  const input = Number(PrimeInput.value ?? 0);
  const prime = findLargestPrimeSmallerThan(input);

  PrimeResult.innerHTML = prime !== null ? `${prime}` : "???";
});
