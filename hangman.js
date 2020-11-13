let passwd = "TEST PASSWORD";
const letters = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";

const create_keyboard = () => {
    let keyboard_content = "";
    for (let i = 0; i < 35; i++) {
        keyboard_content += "<div class='letter' onclick='check_letter(" + i + ")'>" + letters[i] + "</div> ";
    }
    document.getElementById("keyboard").innerHTML = keyboard_content;
}

//create hashed copy
const hash_passwd = (passwd) => {
    for (let i = 0; i < passwd.length; i++) {
        if (passwd.charAt(i) !== " ") {
            passwd = passwd.substring(0, i) + "-" + passwd.substring(i+1);
        }
    }
    return passwd;
}

let hashed_passwd = hash_passwd(passwd);

const print_passwd = () => {
    document.getElementById("passwd").innerHTML = hashed_passwd;
}

const check_letter = (letter) => {
    let indexes = [];
    let buf;

    for (let i = passwd.length - 1; i >= 0; i--) {
        if (passwd.charAt(i) === letters[letter] && buf !== i) {
            indexes.push(i);
            buf = i;
        }
    }
    for (let i = 0; i < indexes.length; i++) {
        hashed_passwd = hashed_passwd.substring(0, indexes[i]) + letters[letter] + hashed_passwd.substring(indexes[i] + 1);
    }
    print_passwd();
}


window.onload = function() {
    create_keyboard();
    print_passwd();
  }

  