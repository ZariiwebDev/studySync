const username = "uzair akram";
const password = "uzair3638?"
const email = "uzairakram22528@gmail.com";
let btn = document.getElementById("submitBtn");
let form = document.getElementById("formx");
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    let user = (data.email === email && data.password === password && data.username === username);
    if(user){
        window.location.href="../index.html";
    }else{
        alert("Sorry user not found !");
    }
})