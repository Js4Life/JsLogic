function cond(num) {
    return num == 60;
}

var grads = [];
for(var i=0;i<20;++i) {
    grads[i] = Math.floor(Math.random()*101)
}


var newVal = grads.filter(cond);
console.log(newVal)