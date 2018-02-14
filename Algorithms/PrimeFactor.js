function primeFactors(n) {
    var factors = [];
    divisors = 2;
    while(n>2) {
        if(n%divisors==0) {
            factors.push(divisors);
            n = n/divisors;
            console.log(n);
        }
        else {
        	divisors++;
        }
    }

    return factors;
}

console.log(primeFactors(69));