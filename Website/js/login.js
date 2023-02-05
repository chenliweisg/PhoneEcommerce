let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let lostPassword = document.getElementById("lostPassword");
let clickhere = document.querySelector('p');
let submit = document.getElementById("signup");


// swapping around sign in and sign out
signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    lostPassword.innerHTML = " Click Here!";
    clickhere.innerHTML = "Forgot password?";
    submit.innerHTML = "Sign in";
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
    document.querySelector('p').innerHTML = "";
    document.getElementById('lostPassword').innerHTML = "";
    submit.innerHTML = "Sign up";
}

submit.onclick = function(e){
    e.preventDefault();

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
                console.log("ure gay");
                location.href = '../html/home.html';
            }
            else{}
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
        
        // location.href = '../html/home.html';
    }
}
