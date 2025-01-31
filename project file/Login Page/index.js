let textanimation = document.getElementById('logox');
let message = "STUDYSYNC LOGIN PAGE";
let i=0;
function updateMessage(){
    if(i === message.length){
        clearInterval(id);
        textanimation.style.textDecoration = "line-through";
        textanimation.style.textDecorationColor = "#726ae6"
        return;
    }
    textanimation.innerHTML +=message[i];
    i++; 
}

let id = setInterval(updateMessage,200);