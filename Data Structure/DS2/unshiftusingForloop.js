var nums = [1,2,3,4,5];
for(var i = 0 ;i <nums.length;i++ ) {
    nums[i] = nums[i+1];
}

console.log(nums);