function isEven(num) {
   return num % 2 == 0;
}

function isOdd(num) {
   return num % 2 != 0;
}

var nums = [];
for(var i=0;i<20;++i) {
    console.log(nums[i] = i+1);
    nums[i] = i + 1;
}

var Even = nums.filter(isEven);
var Odd = nums.filter(isOdd);
console.log(Even);
console.log(Odd);
