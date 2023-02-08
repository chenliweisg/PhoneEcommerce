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
let hiddenitemslist = [];

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
      let containImg = document.createElement("div")/*Liwei */
      
      let pname = response[i].Name;
      let pprice = response[i].Price;

      imagediv.setAttribute("src", response[i].Image);
      namediv.textContent = pname;
      pricediv.textContent = "$" + pprice;

      namediv.classList.add("name");
      pricediv.classList.add("price");
      imagediv.classList.add("image");
      containImg.append(imagediv); /*Liwei */
      console.log(containImg); /*Liwei */
      container.appendChild(containImg); /*Liwei */
      container.appendChild(namediv);
      container.appendChild(pricediv);

      container.id = response[i]._id;
      root.appendChild(container);

      const item = {name: pname.toLowerCase(), price: pprice, id: response[i]._id, brand: response[i].Brand, type: response[i].ProductType, display: true, review: response[i].Review};
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
      products.forEach(product => {
        const productdiv = document.getElementById(product.id);
        if (product.type != "Phone"){
          productdiv.style.display = "none";
          product.display = false;
        }
        else if (product.type === "Phone"){
          productdiv.style.display = "block";
        }
      })
    }

    /*Liwei*/
    $("#products").addClass("row");
    $("#products").children().addClass("col-md-4");
    let btn = $("<button>")
    btn.addClass("btn btn-primary")
    btn.attr("type","button")
    btn.text("Add to cart")
    $("#products").children().append(btn);
    $(".image").addClass("img-fluid");
    $(".image").parent().addClass("imgContainer");

});

//search filters
let optionPhone = document.getElementById("filterPhones");
let optionAccessories = document.getElementById("filterAccessories");

let pricerange = document.getElementById("pricerange");
let hundredto3 = document.getElementById("100to300"); 
let threehundredto5 = document.getElementById("300to500");
let fivehundredto7 = document.getElementById("500to700");
let sevenhundredto9 = document.getElementById("700to900");
let morethan900 = document.getElementById("more900");

let allbrands = document.getElementById("allbrands");
let apple = document.getElementById("apple");
let xiaomi = document.getElementById("xiaomi");
let google = document.getElementById("google");
let others = document.getElementById("others");

let reviews = document.getElementById("reviews");
let threestars = document.getElementById("3stars");
let fourstars = document.getElementById("4stars");
let fivestars = document.getElementById("5stars");

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

      //products
      if (optionPhone.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.type != "Phone"){
            productdiv.style.display = "none";
            product.display = false;
          }
          else {
            productdiv.style.display = "block";
            product.display = true;
          }
        })
      }
      else if (optionAccessories.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.type != "Accessories"){
            productdiv.style.display = "none";
            product.display = false;
          }
          else {
            productdiv.style.display = "block";
            product.display = true;
          }
        })
      }

      //price range
      if (pricerange.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            productdiv.style.display = "block";
            product.display = true;
          }
        })
      }
      else if (hundredto3.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.price > 100 && product.price <= 300){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }
      else if (threehundredto5.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.price > 300 && product.price <= 500){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }
      else if (fivehundredto7.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.price > 500 && product.price <= 700){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }
      else if (sevenhundredto9.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.price > 700 && product.price <= 900){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }
      else if (morethan900.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.price > 900){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }

      //brands
      if (allbrands.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            productdiv.style.display = "block";
            product.display = true;
          }
        })
      }
      else if (apple.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.brand === "Apple"){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }
      else if (xiaomi.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.brand === "Xiaomi"){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }
      else if (google.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.brand === "Google"){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }
      else if (others.className === "list-selected"){
        products.forEach(product => {
          const brand = product.brand;
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (brand != "Apple" && brand != "Xiaomi" && brand != "Google"){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }

      //review
      if (reviews.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            productdiv.style.display = "block";
            product.display = true;
          }
        })
      }
      else if (threestars.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.review >= 3 && product.review < 4){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }
      else if (fourstars.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.review >= 4 && product.review < 5){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }
      else if (fivestars.className === "list-selected"){
        products.forEach(product => {
          const productdiv = document.getElementById(product.id);
          if (product.display === true){
            if (product.review === 5){
              productdiv.style.display = "block";
              product.display = true;
            }
            else {
              productdiv.style.display = "none";
              product.display = false;
            }
          }
        })
      }

    });
  })
});

searchInput.addEventListener("input", (e) => {
  const input = e.target.value.toLowerCase();
  console.log(input);
  products.forEach(product => {
    const productdiv = document.getElementById(product.id);
    if (product.display === true){
      console.log("bryant");
      if (product.name.includes(input)){
        console.log("chen yu");
        productdiv.style.display = "block";
        product.display = true;
      }
      else {
        console.log("shawn");
        productdiv.style.display = "none";
        product.display = false;
        const hiddenitems = {id: product.id};
        hiddenitemslist.push(hiddenitems);
      }
    }
    else if (input.length === 0){
      console.log("johnathan");
      hiddenitemslist.forEach(item => {
        const productdiv = document.getElementById(item.id);
        productdiv.style.display = "block";
        products.forEach(product => {
          if (product.id === item.id){
            product.display = true;
          }
        })
      })
    }
  })
})
