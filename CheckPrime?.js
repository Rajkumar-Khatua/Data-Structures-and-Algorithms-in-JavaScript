const isPrime = (num) => {
    if(num < 2) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(4)); // true

// Write prime numbers from 1 to 100
const primeNumbers = (n) => {
    for(let i = 1; i <= n; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

console.log(primeNumbers(20))