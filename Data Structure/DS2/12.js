function curve(grade) {
    return grade += 5;
}

var grades = [77,1,50,4];

var newgrades = grades.map(curve);
console.log(newgrades);