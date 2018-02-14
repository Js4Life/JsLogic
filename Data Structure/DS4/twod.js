var p = console.log;

Array.matrix = function(numrows,numcols,initial) {
    var arr = [];
    for(var i=0;i<numrows;++i) {
        var columns = [];
        for(var j=0;j<numcols;++j){
            columns[j] =initial;
        }
        arr[i] =columns;
    }

    return arr;
}

var nums = Array.matrix(5,5,0);
p(nums[1][1]); // displays 0

// var twod = [];
// var rows = 5 ;
// for(var i=0 ; i< rows ; ++i) {
//     twod[i] = [];
//     p(twod);
// } 
// p(twod);