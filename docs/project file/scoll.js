let currentScrollPosition = window.scrollY;
let lastScrollPosition=0;
const naviGationBar = document.querySelector(".navbar");
function hideNavigationBar(){
    naviGationBar.style.display="none"; // hiding the nav bar when user scrolls down
    document.getElementById('theme-Switcher').style.display="none";
}
function showNavigationBar(){
    naviGationBar.style.display="block"; // showing the nav bar when user scrolls up
    document.getElementById('theme-Switcher').style.display="block";
}
document.addEventListener("scroll",(event)=>{
    lastScrollPosition = currentScrollPosition;
    currentScrollPosition = window.scrollY;
    currentScrollPosition<lastScrollPosition ? showNavigationBar() : hideNavigationBar();
});