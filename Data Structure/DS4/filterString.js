var words = ["XX","bjsbvjsrag","vjsjfkragvjdv","fbsjghsfjksrag"];

function afterc(num) {
    if(num.indexOf("rag") > -1) {
        return true;
    }
    return false
}

var newval = words.filter(afterc);
console.log(newval);
