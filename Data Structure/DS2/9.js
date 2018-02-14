function isEven(num) {
    return num % 2 == 0;
}

var nums = [2,4,6,8,11];

var even = nums.every(isEven);

if(even) {
    console.log('all nums are even');
}
else {
    console.log('not all num are even');
}