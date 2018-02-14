var mid =25;
var high = 50;
var low = 1;
var current = 131;
var found = -1;

if(current < mid) {
    mid=(current-low)/2;
    console.log(mid);
} else if(current>mid){
    mid=(current+high)/2;
    console.log(mid);
} else {
    found = current;
    console.log(found);
}


// if(current < mid) {
//     mid = (current-low)/2;
//     console.log(mid)
// } else {
//     mid =(current+low)/2;
//     console.log(mid)
// }









// var x = 3;
// var y = 1.1;

// console.log(y.toFixed())