$(document).ready(function() {

    $.ajax({url:"../html/navbar.html", success:function(result){
        $("nav.bg-dark").html(result);
    }});
    
    $.ajax({url:"../html/footer.html", success:function(result){
        $("footer").html(result);
    }});

    /*CartList from localstorage*/
    let cart = JSON.parse(localStorage.getItem("cart"));

    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {

    /*sub wrapper Prod des*/
    let pdesc = $("<div>")
    pdesc.addClass("prod-desc col-6")
    /*name*/
    let pName = $("<h6>")
    pName.text(cart[i].name)
    /*price*/
    let pPrice = $("<h6>")
    pPrice.text("$"+cart[i].price * cart[i].qty)
    /*review*/
    let pReview = $("<h6>")
    let star = $("<i>")
    star.addClass("fa fa-star text-warning")
    pReview.append(star)
    pReview.append(cart[i].review)
    pdesc.append(pName,pPrice,pReview)


    /*sub wrapper Prod qty*/
    let pqty = $("<div>")
    pqty.addClass("prod-qty col-3")
    let qty = $("<h6>")
    qty.append("X"+cart[i].qty)
    pqty.append(qty)

    /*sub wrapper Img*/
    let pimg = $("<div>")
    pimg.addClass("prod-img col-3")
    let img = $("<img>")
    img.attr("src",cart[i].image)
    img.addClass("img-fluid")
    pimg.append(img)

    /*main wrapper*/
    let item = $("<div>")   
    item.addClass("item row d-flex justify-content-between align-items-center") 
    item.append(pimg,pdesc,pqty)
   
    /*append into cart*/
    $(".cart").append(item)

    /*Subtotal */
    subtotal+=cart[i].price * cart[i].qty
    }

    $(".subtotal h6").text("$"+subtotal)
    $(".totalAmt h6").eq(1).text("$"+(subtotal-219).toFixed(2))

    function hideOnlinePayment(d){
        $('.online-payment').hide();
        $('main').css('padding-bottom','11%');
        if (d.ctrlKey)
        {
            console.log('crtl key is pressed')
        }
    }

    function unhideOnlinePayment(event){
        $('.online-payment').show();
        $('main').css('padding-bottom','50px');
    }
    
    $("#cash-payment").on("click",function(event){
        hideOnlinePayment(event)
    });

    $("#online-payment").on("click",function(event){
        unhideOnlinePayment(event)
    });

   
});

var anime = bodymovin.loadAnimation({

    container: document.getElementById('confetti'), 
    path: 'https://assets2.lottiefiles.com/packages/lf20_eiyorylp.json', 
    renderer: 'svg',
    loop: false, 
    autoplay: false, 
    name: "Demo Animation", 
 });
 anime.setSpeed(0.4);
    $("#placeOrder").on("click",function(event){
        $('.confetti').removeClass('hide')
        anime.goToAndPlay(0,true);
    });

    anime.addEventListener('complete', () => {
        $('.confetti').addClass('hide')       
    })