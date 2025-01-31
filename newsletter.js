function getEmailUser(){
const emailInput = document.querySelector('.box');
const userEmail = emailInput.value;
let localName = userEmail.substring(0,userEmail.indexOf('@'));
let domainName = userEmail.substring(userEmail.indexOf('@')+1,userEmail.indexOf('.'));
if(userEmail === '' || !(userEmail.includes('@')||!(userEmail.includes('.com')))|| (domainName !=="gmail" && domainName!=="yahoo")){
    document.querySelector('#description').innerHTML = "Please Enter email !";
    document.querySelector('#description').classList.add = "emailerror";
    document.querySelector('#description').style.color = "red";
    setTimeout(()=>{
        document.querySelector('#description').innerHTML = "";
    },6000);
    return;
}else{
    console.log(userEmail);
    document.querySelector('#description').innerHTML = "Thanks for subscribing";
    document.querySelector('#description').style.color = "#303dcf";
    setTimeout(()=>{
        document.querySelector('#description').innerHTML = "";
    },6000);
    return;
}
}
const emailBtn = document.querySelector('.button_send');
emailBtn.addEventListener("click",getEmailUser);