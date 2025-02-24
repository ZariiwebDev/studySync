const menuBarBtn = document.querySelector('#menuBar');
let trace=1;
menuBarBtn.addEventListener('click',(e)=>{
    const menubar = e.srcElement.parentNode.parentNode.children[1];
    if(trace%2 !== 0){
        menubar.style.display = "flex";
        menuBarBtn.children[0].src = "images/close.svg";
    }else{
        menubar.style.display = "none";
        menuBarBtn.children[0].src = "images/Hamburger.svg";
    }
    trace++; 
});