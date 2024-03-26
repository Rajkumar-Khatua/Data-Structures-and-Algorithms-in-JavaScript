const fibo = (n) => {
  if (n === 0 || n === 1) return n;

  while (n > 1) {
    let nextNumber = fibo(n - 1) + fibo(n - 2);
    return nextNumber;
  }
};

console.log(fibo(12)); // 55
