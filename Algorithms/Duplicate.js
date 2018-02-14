function removeDuplicate(arr) {
    var exists = {},
    outArr = [],
    elm;

    for(var i = 0 ; i<arr.length;i++){
        elem = arr[i];
        if(!exists[elm]) {
            outArr.push(elm);
            exists[elm] = true;
        }
    }
    return outArr;
}

console.log(removeDuplicate([1,3,3,4]));
