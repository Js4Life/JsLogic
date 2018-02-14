function concat(acc,item) {
    return acc + item;
}

var words = ["the","quick","brown","fox"];

var sentence = words.reduceRight(concat);
console.log(sentence);