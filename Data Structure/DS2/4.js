var nums = [1,2,3,7,8,9];
var newElements = [4,5,6].toString().split('');
nums.splice(3,0,newElements);
console.log(nums);
