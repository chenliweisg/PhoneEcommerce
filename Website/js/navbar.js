//display username on login


addEventListener('DOMContentLoaded', () => {
    let username = JSON.parse(sessionStorage.getItem("member"));
    // username = JSON.parse(storedusername);
    console.log(username);
  
    let login = document.getElementById("login");
    login.innerHTML = `<i class="fa-solid fa-right-to-bracket mr-2"></i>` + username;
  })