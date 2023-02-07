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
        $('.card').closest('.owl-item').eq(i).find('.card').append(`<img src=${response[i].Image} class="card-img-top"></div>`)
        $('.card').closest('.owl-item').eq(i).find('.card').append('<div class="card-body"></div>')
        $('.card-body').closest('.owl-item').eq(i).find('.card-body').append(`<h5 class="product-name">${response[i].Name}</h5>`)
        $('.card-body').closest('.owl-item').eq(i).find('.card-body').append(`<h5 class="product-price">${response[i].Price}</h5>`)
        $('.card-body').closest('.owl-item').eq(i).find('.card-body').append('<p class="review"></p>')
        $('.review').closest('.owl-item').eq(i).find('.review').append(`<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>${response[i].Review}`)
        $('.card-body').closest('.owl-item').eq(i).find('.card-body').append('<button type="button" class="btn btn-primary">Add to cart</button>')
       

      }

  });




});