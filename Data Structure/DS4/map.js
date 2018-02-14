















var print = console.log;
function first(word) {
    return word[0];
}

var word = ["rag","have","dra"];

var acronym = word.map(first).join(" ").toString();

print(acronym);


// function curve(grade) {
//     return grade +=5;
// }

// var grades = [77,2,3,81,89];

// var newgrades = grades.map(curve);

// console.log(newgrades);