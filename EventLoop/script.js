function multiply(a,b) {
    return a*b;
}

function square(n) {
    return multiply(n,n);
}

function PrintSquare(n) {
    var sqaured = square(n);
    console.log(sqaured);
}

PrintSquare(4);