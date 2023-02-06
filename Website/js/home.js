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
    for (i=0; i<response.length; i++){
        $('.owl-carousel owl-theme').prepend('<div class="item"></div>');
        $('.item').prepend('<div class="card text-black text-center"></div>');
        $('.card').prepend('<img src="" class="card-img-top"/>');
        $('card-img-top').after('<div class="card-body">');
        

        $('.product-name').text(response[i].Name);
        $('.product-price').text(response[i].Price);
    }
  });

  


});