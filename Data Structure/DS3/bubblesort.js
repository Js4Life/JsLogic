function bubbleSort(items) {
    var length = items.length;
  //  console.log(length);
    for(var i=(length - 1);i >= 0;i--) {
        for(var j=(length - i);j>0;j--){
            if(items[j]<items[j-1]){
                // swap
                var temp = items[j];
                items[j] = items[j-1];
                items[j-1] = temp;
                console.log(temp);
            }
        }
    }
}
console.log(bubbleSort([4,2,6,1])) 
