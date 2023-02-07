$(document).ready(function() {
    $.ajax({url:"../html/navbar.html", success:function(result){
        $("nav.bg-dark").html(result);
    }});
    
    $.ajax({url:"../html/footer.html", success:function(result){
        $("footer").html(result);
    }});
    
    });

const productCardTemplate = document.querySelector("[data-product-template]");
const productCardContainer = document.querySelector("[data-products-container]");

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
      
      imagediv.setAttribute("src", response[i].Image);
      namediv.textContent = response[i].Name;
      pricediv.textContent = response[i].Price;

      namediv.classList.add("name");
      pricediv.classList.add("price");
      imagediv.classList.add("image");
      container.appendChild(imagediv);
      container.appendChild(namediv);
      container.appendChild(pricediv);

      container.id = response[i]._id;
      root.appendChild(container);
    }
  });