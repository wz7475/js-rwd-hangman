/* let word = "1234144";
let indexes = [];
let buf;

for (let i=word.length-1; i>=0; i--){
    if (word[i] === "1" && buf !== i){
        indexes.push(i);
        buf = i;
    }
}
for (let i=0; i<indexes.length; i++){
    word = word.substring(0, indexes[i]) + "-" + word.substring(indexes[i] +1);
}
console.log(word); */
function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}
let file = require('.\\data\\all.json');
let length = file["proverbs"].length;
let proverb = file["proverbs"][randomInt(0, length)];
console.log(proverb);