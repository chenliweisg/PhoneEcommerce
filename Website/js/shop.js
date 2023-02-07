$(document).ready(function() {
    $.ajax({url:"../html/navbar.html", success:function(result){
        $("nav.bg-dark").html(result);
    }});
    
    $.ajax({url:"../html/footer.html", success:function(result){
        $("footer").html(result);
    }});
    
    });

const searchInput = document.getElementById("search-bar");
let accessories = [];
let phones = [];

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

      const productObject = {name: pname.toLowerCase(), price: pprice, id: response[i]._id, brand: response[i].Brand};
      products.push(productObject);
    }
  });

searchInput.addEventListener("input", (e) => {
  const input = e.target.value.toLowerCase();
  console.log(input);
  products.forEach(product => {
    const productdiv = document.getElementById(product.id);
    if (!product.name.includes(input)){
      productdiv.style.display = "none";
    }
    else if (input.length === 0){
      productdiv.style.display = "block";
      console.log("nth if")
    }
    else if (product.name.includes(input)){
      productdiv.style.display = "block";
    }
  })
  
})