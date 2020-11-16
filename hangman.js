let passwd = "";
let hashed_passwd = "";
const letters = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";
let mistakes = 0;
const proverbs = [
    "bez pracy nie ma kołaczy",
    "czas leczy rany",
    "elektryka prąd nie tyka",
    "apetyt rośnie w miarę jedzenia",
    "do trzech razy sztuka",
    "Broda mędrcem nie czyni",
    "Co nagle to po diable",
    "Co z oczu to z serca",
    "Darowanemu koniowi w zęby się nie zagląda",
    "Fortuna kołem się toczy"
];

const randomize_passwd = () =>{
    function randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
    }
    return proverbs[randomInt(0,proverbs.length)].toUpperCase();
}

const create_keyboard = () => {
    let keyboard_content = "";
    for (let i = 0; i < 35; i++) {
        keyboard_content += "<div class='letter' id=" + i + " onclick='check_letter(" + i + ")'>" + letters[i] + "</div> ";
    }
    document.getElementById("keyboard").innerHTML = keyboard_content;
}

//create hashed copy
const hash_passwd = (passwd) => {
    for (let i = 0; i < passwd.length; i++) {
        if (passwd.charAt(i) !== " ") {
            passwd = passwd.substring(0, i) + "-" + passwd.substring(i + 1);
        }
    }
    return passwd;
}

const print_passwd = () => {
    let arr = hashed_passwd.split(" ");
    //make divs and display flex; inline/inline-block;
    let content = "";
    for (let i=0; i<arr.length; i++){
        content += `<div>${arr[i]}</div>`;
    }
    document.getElementById("passwd").innerHTML = content;
}

const advance_picture = () =>{
    let address = `<div id="img_container"><img src="img/s${mistakes}.jpg"><span id="counter">${mistakes}/9</span></div>`
    document.getElementById("picture").innerHTML = address;
}

const check_letter = (letter) => {
    //check if letter was already clicked
    if (document.getElementById(letter).classList.length > 1)
        return;
    //replace dashes with letters
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
    //update passwd
    print_passwd();
    //disable cursor
    document.getElementById(letter).style.cursor = "default";
    //if indexes.length === 0 -> advance picture and make red, increment mistakes
    // else make green
    if (indexes.length === 0) {
        document.getElementById(letter).classList.add("red");
        let audio = new Audio('audio/no.wav');
        audio.play();
        mistakes++;
        advance_picture();
        // if lost
        if (mistakes === 9) {
            message(false);
            return;
        }
    }
    else {
        document.getElementById(letter).classList.add("green");
        let audio = new Audio('audio/yes.wav');
        audio.play();
    }
    //if won
    if (hashed_passwd === passwd) {
        message(true);
        return;
    }
}

const message = (score) =>
{
    let message;
    let audio;
    if (score){
        message = `Udało się! Gratulacje!`;
        audio = new Audio('audio/win.wav');
    } else{
        message = "Nie udało się! Prawidłowe hasło:\n" + passwd;
        audio = new Audio('audio/fail.wav');
    }
    audio.play();
    let content = `<div id="text">${message}</div><div id="button" onclick="start()">JESZCZE RAZ</div>`;
    document.getElementById("keyboard").classList.add("message");
    document.getElementById("keyboard").innerHTML = content;
}

//load layout
const start = () => {
    passwd = randomize_passwd();
    hashed_passwd = hash_passwd(passwd);
    create_keyboard();
    print_passwd();
    document.getElementById("keyboard").classList.remove("message");
    mistakes = 0;
    advance_picture();
}

window.onload = start;