var names = ['ashwin','sagir','raghu','sandeep','raghu'];
console.log(names);
var joins = names.join();
console.log(joins);

var toStrin = names.toString()
console.log('tostring', toStrin);

var name = 'raghu';
var position = names.indexOf(name);
var last = names.lastIndexOf(name);

if(position >=0) {
    console.log("Found " + name + " at position " + position);
    console.log(last);
} else {
    console.log(name + "not found in array");
}

