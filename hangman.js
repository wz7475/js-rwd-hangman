let passwd = "test passwd";
let hashed_passwd = hash_passwd(passwd);

const create_keyboard = () => {
    const letters = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";
    let keyboard_content = "";
    for (let i = 0; i < 35; i++) {
        keyboard_content += "<div class='letter' onclick='check_letter(" + i + ")'>" + letters[i] + "</div> ";
    }
    document.getElementById("keyboard").innerHTML = keyboard_content;
}

//create hashed copy
const hash_passwd = (passwd) => {
    for (let i = 0; i < passwd.length; i++) {
        if (test[i] !== " ") {
            test[i] = "-";
        }
    }
    return passwd;
}


const check_letter = (letter) => {
    let indexes = [];
    let buf;

    for (let i = passwd.length - 1; i >= 0; i--) {
        if (passwd[i] === letter && buf !== i) {
            indexes.push(i);
            buf = i;
        }
    }
    for (let i = 0; i < indexes.length; i++) {
        hashed_passwd = hashed_passwd.substring(0, indexes[i]) + letter + hashed_passwd.substring(indexes[i] + 1);
    }
}
