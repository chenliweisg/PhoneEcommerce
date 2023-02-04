let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

    signinBtn.onclick = function(){
        
    }
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}