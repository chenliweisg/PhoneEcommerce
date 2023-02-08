$(document).ready(function() {
$.ajax({url:"../html/navbar.html", success:function(result){
    $("nav.bg-dark").html(result);
}});

$.ajax({url:"../html/footer.html", success:function(result){
    $("footer").html(result);
}});

  

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

$.ajax(settings).done(function (response) {
    console.log(response);

    for (let i = 0; i < response.length; i++) {
        console.log(i);

        $('.owl-stage').append('<div class="owl-item active"></div>')
        $('.owl-item').eq(i).append('<div class="item"></div>')
        $('.item').closest('.owl-item').eq(i).find('.item').append('<div class="card text-black text-center"></div>')
        $('.card').closest('.owl-item').eq(i).find('.card').append(`<img src=${response[i].Image} class="card-img-top">`)
        $('.card').closest('.owl-item').eq(i).find('.card').append('<div class="card-body"></div>')
        $('.card-body').closest('.owl-item').eq(i).find('.card-body').append(`<h5 class="product-name">${response[i].Name}</h5>`)
        $('.card-body').closest('.owl-item').eq(i).find('.card-body').append(`<h5 class="product-price">${response[i].Price}</h5>`)
        $('.card-body').closest('.owl-item').eq(i).find('.card-body').append(`<p class="review" data-rating=${response[i].Review}></p>`)
        $('.review').closest('.owl-item').eq(i).find('.review').append(`<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>${response[i].Review}`)
        $('.card-body').closest('.owl-item').eq(i).find('.card-body').append('<button type="button" class="btn btn-primary add-cart">Add to cart</button>')
       

      }

      $(".add-cart").on("click",function(event){
        var btnClicked = event.target
        
        var img = $(btnClicked).parent().siblings('.card-img-top').attr("src")
        var name = $(btnClicked).siblings('.product-name').text()
        var price = $(btnClicked).siblings('.product-price').text()
        var rating = $(btnClicked).siblings('.review').data("rating")

        /*CartList*/
        let cart = JSON.parse(localStorage.getItem("cart"))

        if(JSON.parse(localStorage.getItem("cart"))==null)
        {
          cart = []
        }

        /*Item*/
        function item(image,name,price,review,qty){
            this.image = image;
            this.name = name;
            this.price = price;
            this.review = review;
            this.qty = qty;
        }
        let newItem = new item(img,name,price,rating,1);
        
        if(JSON.parse(localStorage.getItem("cart"))!=null)
        {
          var found = false
          for (let i = 0; i < cart.length; i++) {
            if(cart[i].name == name){
              cart[i].qty +=1;
              localStorage.setItem("cart",JSON.stringify(cart));
              found = true;
              break;
            }
          }
          if (found == false){
            cart.push(newItem);
            localStorage.setItem("cart",JSON.stringify(cart));
          }
        }
        else{
          cart.push(newItem);
          localStorage.setItem("cart",JSON.stringify(cart));
        }

        let newcart = JSON.parse(localStorage.getItem("cart"));
        console.log(newcart);
        
      });


  });




});
