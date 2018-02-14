function add(a,b){
    return a + b;
} 

var nums = [1,2,3,4,5,6];

var sum = nums.reduce(add);

console.log(sum);