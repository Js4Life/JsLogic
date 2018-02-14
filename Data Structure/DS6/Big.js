
function crossAdd(input){
    var answers = [];
    for(var i=0;i<input.length;i++) {
       var goingUp = input[i];
       var goingDown = input[input.length - 1 -i];
       answers.push(goingUp + goingDown);
    }
    return answers;
}


// console.log(crossAdd([1,2,3,6]));

function find(haystack,needle){
    for(var i=0;i<haystack.length;i++){
        if(haystack[i] == needle) return true;
    }
}

// console.log(find([1,2,3],3));

function makeTuples(input){
    var answers = [];
    for(var i=0;i<input.length;i++){
        for(var j=0;j<input.length;j++){
            answers.push([input[i],input[j]])
        }
       
    } 
    return answers;
}

console.log(makeTuples([1,2,3]));


