$(document).ready(function() {
    $.ajax({url:"../html/navbar.html", success:function(result){
        $("nav.bg-dark").html(result);
    }});
    
    $.ajax({url:"../html/footer.html", success:function(result){
        $("footer").html(result);
    }});
    
    });

const searchInput = document.getElementById("search-bar");
let products = [];
let phones = [];
let accessories = [];

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://accountdetails-3613.restdb.io/rest/products",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63df19783bc6b255ed0c4685",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).then(function (response) {
    console.log(response)

    for (i=0; i<response.length; i++){
      let root = document.getElementById("products");
      let container = document.createElement("div");
      let namediv = document.createElement("div");
      let pricediv = document.createElement("div");
      let imagediv = document.createElement("img");
      
      let pname = response[i].Name;
      let pprice = response[i].Price;

      imagediv.setAttribute("src", response[i].Image);
      namediv.textContent = pname;
      pricediv.textContent = "$" + pprice;

      namediv.classList.add("name");
      pricediv.classList.add("price");
      imagediv.classList.add("image");
      container.appendChild(imagediv);
      container.appendChild(namediv);
      container.appendChild(pricediv);

      container.id = response[i]._id;
      root.appendChild(container);

      const item = {name: pname.toLowerCase(), price: pprice, id: response[i]._id, brand: response[i].Brand};
      products.push(item);

      if (response[i].ProductType === "Phone"){
        const productObject = {name: pname.toLowerCase(), price: pprice, id: response[i]._id, brand: response[i].Brand};
        phones.push(productObject);
      }
      else {
        const productObject = {name: pname.toLowerCase(), price: pprice, id: response[i]._id, brand: response[i].Brand};
        accessories.push(productObject);
      }
    }

    if (optionPhone.className === "list-selected"){
      accessories.forEach(product => {
        const productdiv = document.getElementById(product.id);
        productdiv.style.display = "none";
      })
      phones.forEach(product => {
        const productdiv = document.getElementById(product.id);
        productdiv.style.display = "block";
      })
    }
    else if (optionAccessories.className === "list-selected"){
      accessories.forEach(product => {
        const productdiv = document.getElementById(product.id);
        productdiv.style.display = "block";
      })
      phones.forEach(product => {
        const productdiv = document.getElementById(product.id);
        productdiv.style.display = "none";
      })
    }
});

searchInput.addEventListener("input", (e) => {
  const input = e.target.value.toLowerCase();
  console.log(input);
  if (optionPhone.className === "list-selected"){
    phones.forEach(product => {
      const productdiv = document.getElementById(product.id);
      if (!product.name.includes(input)){
        productdiv.style.display = "none";
      }
      else if (input.length === 0){
        productdiv.style.display = "block";
      }
      else if (product.name.includes(input)){
        productdiv.style.display = "block";
      }
    })
  }
  else if (optionAccessories.className === "list-selected"){
    accessories.forEach(product => {
      const productdiv = document.getElementById(product.id);
      if (!product.name.includes(input)){
        productdiv.style.display = "none";
      }
      else if (input.length === 0){
        productdiv.style.display = "block";
      }
      else if (product.name.includes(input)){
        productdiv.style.display = "block";
      }
    })
  }
})

//search filters
let optionPhone = document.getElementById("filterPhones");
let optionAccessories = document.getElementById("filterAccessories");

const dropdowns = document.querySelectorAll(".select-filter");
dropdowns.forEach(dropdown =>{
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () =>{
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach(option =>{
    option.addEventListener("click", () =>{
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach(option => {
        option.className = "";
      });

      option.className = "list-selected";

      if (optionPhone.className === "list-selected"){
        accessories.forEach(product => {
          const productdiv = document.getElementById(product.id);
          productdiv.style.display = "none";
        })
        phones.forEach(product => {
          const productdiv = document.getElementById(product.id);
          productdiv.style.display = "block";
        })
      }
      else if (optionAccessories.className === "list-selected"){
        accessories.forEach(product => {
          const productdiv = document.getElementById(product.id);
          productdiv.style.display = "block";
        })
        phones.forEach(product => {
          const productdiv = document.getElementById(product.id);
          productdiv.style.display = "none";
        })
      }
      })
    });
  });