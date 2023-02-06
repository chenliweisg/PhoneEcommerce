let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let lostPassword = document.getElementById("lostPassword");
let clickhere = document.querySelector('p');
let submit = document.getElementById("signup");
let inputFields = document.querySelectorAll(".input");

submit.disabled = true;

document.getElementById("inputName").onkeyup = function(){
    document.getElementById("inputEmail").onkeyup = function(){
        document.getElementById("inputPassword").onkeyup = function(){
            submit.disabled = false;
            console.log("u gay");
        }
    }
}

// swapping around sign in and sign out
signinBtn.onclick = function(){
    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPassword").value = "";
    nameField.style.maxHeight = "0";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    lostPassword.innerHTML = " Click Here!";
    clickhere.innerHTML = "Forgot password?";
    submit.innerHTML = "Sign in";

    document.getElementById("inputEmail").onkeyup = function(){
        document.getElementById("inputPassword").onkeyup = function(){
            submit.disabled = false;
            console.log("u gay");
        }
    }
}

signupBtn.onclick = function(){
    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPassword").value = "";
    nameField.style.maxHeight = "60px";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
    document.querySelector('p').innerHTML = "";
    document.getElementById('lostPassword').innerHTML = "";
    submit.innerHTML = "Sign up";
}

submit.onclick = function(e){
    e.preventDefault();
    submit.disabled = true;

    if (submit.innerHTML === "Sign in"){
        let signinEmail = document.getElementById("inputEmail");
        let signinPassword = document.getElementById("inputPassword");

        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://accountdetails-3613.restdb.io/rest/logininfo",
            "method": "GET",
            "headers": {
            "content-type": "application/json",
            "x-apikey": "63df19783bc6b255ed0c4685",
            "cache-control": "no-cache"
        },}

        $.ajax(settings).done(function (response){
        console.log(response);

            for (i=0; i<response.length; i++){
                if (signinEmail.value === response[i].Email && signinPassword.value === response[i].Password) {
                    localStorage.setItem("name", response[i].Name);
                    location.href = '../html/home.html';
                    submit.disabled = false;
                    break;
                }
                else{
                    submit.disabled = true;
                }
            }
        
        if (submit.disabled === true){
            alert("Invalid email or password");
            signinEmail.value = "";
            signinPassword.value = "";
        }
    })
    }
    else if (submit.innerHTML === "Sign up"){
        let signupName = document.getElementById("inputName");
        let signupEmail = document.getElementById("inputEmail");
        let signupPassword = document.getElementById("inputPassword");

        let jsondata = {"Email": signupEmail.value,"Password": signupPassword.value, "Name": signupName.value};
        let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://accountdetails-3613.restdb.io/rest/logininfo",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "63df19783bc6b255ed0c4685",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
        }

        $.ajax(settings).done(function (response) {
        console.log(response);
        });

        signupName.value = "";
        signupEmail.value = "";
        signupPassword.value = "";
        submit.disabled = true;
        // location.href = '../html/home.html';
    }
}

//lolololololo
//xdxdxd21