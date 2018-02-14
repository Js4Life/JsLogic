function curve(arr,val) {
    for(var i=0;i<arr.length;i++){
        arr[i] += val;
    }
}

var newArr = [14,2,3,4];
curve(newArr,5);
console.log(newArr);