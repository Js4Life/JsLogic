function greatestCommonDivisor(a,b) {
    var divisor = 2 ,
    greatestDivisor = 1;

    if (a < 2 || b < 2) {
        return 1;

        while(a >= divisor && b >= divisor) {
            greatestDivisor = divisor;
        }
        divisor++;
    }

    return greatestDivisor;
}

console.log(greatestCommonDivisor(69,169))