$(document).ready(function() {
    $.ajax({url:"../html/navbar.html", success:function(result){
        $("nav.bg-dark").html(result);
    }});
    
    $.ajax({url:"../html/footer.html", success:function(result){
        $("footer").html(result);
    }});


    /*Create item element in cart*/
    function newItem(i){
        $('.cart-items .card').append('<div class="item row d-flex justify-content-between align-items-center"></div>')
        var prodImg = '<div class="prod-img col-sm-12 col-md-3"><img src="" class="img-fluid" alt="Responsive image"></div>'
        var prodDesc ='<div class="prod-desc col-sm-12 col-md-3"><h6 class="prod-name"></h6><p class="review"><i class="fa fa-star text-warning"></i></p></div>'
        var prodQty =`<div class="prod-qty d-flex col-sm-12 col-md-3 "><button class="btn minus-btn btn" ><i class="fas fa-minus"></i></button><input id="qty" min="0" name="qty" value="1" type="number" class="form-control" /><button class="btn plus-btn btn"><i class="fas fa-plus"></i></button></div>`
        var ProdPrice =`<div class="prod-price col-sm-12 col-md-2" data-price=""><h6></h6></div>`
        var RemoveProd =`<div class="remove-prod col-sm-12 col-md-1"><a href="#!" class="text-danger remove-btn"><i class="fa-solid fa-trash-can fa-lg"></i></a><button type="button" class="btn btn-danger remove-btn"></button></div>`
        $('.item').eq(i).append(prodImg,prodDesc,prodQty,ProdPrice,RemoveProd);
    }

    /*API */
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
        
        /*CartList*/
        let cart = JSON.parse(localStorage.getItem("cart"));

        for (let i = 0; i < cart.length; i++) {
            newItem(i);
            $('.item').eq(i).find('.img-fluid').attr('src', cart[i].image)
            $('.item').eq(i).find('.prod-name').text(cart[i].name)
            $('.item').eq(i).find('.review').append(cart[i].review)
            $('.item').eq(i).find('#qty').val(cart[i].qty)

            $('.item').eq(i).find('.prod-price h6').text("$"+(cart[i].price*cart[i].qty).toFixed(2))
            $('.item').eq(i).find('.prod-price').data("price",cart[i].price)
            
        }

        /*remove single item from cart*/
        $(".remove-btn").on("click",function(event){
            var btnClicked = event.target
            btnClicked.closest('.item').remove();
    
        });

        /*Minus Btn*/
        $(".minus-btn").on("click",function(event){
            var btnClicked = event.target

            /*update qty value and calculate new price*/
            var prodName = $(btnClicked).closest('.item').find('.prod-name').text()
            var qty = parseInt($(btnClicked).parent().next().val())-1
            var price = parseFloat($(btnClicked).closest('.item').find('.prod-price').data("price"))
            $(btnClicked).parent().next().val(qty)
            $(btnClicked).closest('.item').find('.prod-price h6').text("$"+(qty * price).toFixed(2));

            /*Remove single item from cart when qty = 0*/
            if($(btnClicked).parent().next().val() == 0){
                btnClicked.closest('.item').remove();

                /*Update local storage*/
                for (let i = 0; i < cart.length; i++) {
                    if(cart[i].name == prodName){
                      /*Remove this item from local storage cart*/
                      cart.splice(i, 1);
                      localStorage.setItem("cart",JSON.stringify(cart));
                    }
                }
            }
            else{
                /*Update local storage*/
                for (let i = 0; i < cart.length; i++) {
                    if(cart[i].name == prodName){
                      cart[i].qty = qty;
                      localStorage.setItem("cart",JSON.stringify(cart));
                    }
                }
            }
        });

        /*Plus Btn*/
        $(".plus-btn").on("click",function(event){
            var btnClicked = event.target
            
            /*update qty value and calculate new price*/
            var prodName = $(btnClicked).closest('.item').find('.prod-name').text()
            var qty = parseInt($(btnClicked).parent().prev().val())+1
            var price = parseFloat($(btnClicked).closest('.item').find('.prod-price').data("price"))
            $(btnClicked).parent().prev().val(qty)
            $(btnClicked).closest('.item').find('.prod-price h6').text("$"+(qty * price).toFixed(2));

            /*Update local storage*/
            for (let i = 0; i < cart.length; i++) {
                if(cart[i].name == prodName){
                  cart[i].qty = qty;
                  localStorage.setItem("cart",JSON.stringify(cart));
                }
            }
        });


    });

 
});
let newcart = JSON.parse(localStorage.getItem("cart"));
console.log(newcart);