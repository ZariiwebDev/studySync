/*darkmode is retrieving the value stored in the"darkmode" key from the browser's localStorage */
let darkmode = localStorage.getItem("darkmode");
const themeSwitchBtn = document.getElementById("theme-Switcher")
const enableDarkMode = ()=>{
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode","active");
    themeSwitchBtn.firstElementChild.style.display = "none";
    themeSwitchBtn.lastElementChild.style.display = "block";
}
const disableDarkMode = ()=>{
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode",undefined);
    themeSwitchBtn.firstElementChild.style.display = "block";
    themeSwitchBtn.lastElementChild.style.display = "none";
}
if(darkmode === "active"){
    enableDarkMode();
}
function themeSwitch(){
    darkmode = localStorage.getItem('darkmode'); // updating and retireving the current key
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
}
//eventListner for click Event
themeSwitchBtn.addEventListener("click",themeSwitch); 