function copy(arr1,arr2) {
    for(var i=0;i<10;i++) {
        arr2[i] = arr1[i];
    }
}
var samenums = [];
var nums=[];
for(var i=0;i<10;i++) {
    nums[i] = i + 1;
}
copy(nums,samenums);
nums[0]=400;
console.log(samenums[0]);