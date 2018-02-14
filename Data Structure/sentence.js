var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
console.log(words);
for(var i=0;i<words.length;++i) {
    console.log("word" + i + ":" +words[i]);
}