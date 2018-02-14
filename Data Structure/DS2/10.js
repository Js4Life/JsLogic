function isEven(num) {
    return num % 2 == 0 ;
}

var nums = [1,2,3,4,5,6,7];
var someEven = nums.some(isEven);

if(someEven) {
    console.log('some numbers are even')
} else {
    console.log('no number are even');
}