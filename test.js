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

const hash_passwd = (passwd) => {
    for (let i = 0; i < passwd.length; i++) {
        if (passwd[i] !== " ") {
            passwd = passwd.substring(0, i) + "-" + passwd.substring(i+1);
        }
    }
    return passwd;
}

let test = "asd fds af";
test = hash_passwd(test);
console.log(test);