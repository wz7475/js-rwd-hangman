const create_keyboard = () =>
{
    const letters = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";
    let keyboard_content = "";
    for (let i =0; i< 35; i++){
        keyboard_content += "<div class='letter' onclick='check_letter("+i+")'>"+letters[i]+"</div> ";
    }
    document.getElementById("keyboard").innerHTML = keyboard_content;
}