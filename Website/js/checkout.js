$(document).ready(function() {

    $.ajax({url:"../html/navbar.html", success:function(result){
        $("nav.bg-dark").html(result);
    }});
    
    $.ajax({url:"../html/footer.html", success:function(result){
        $("footer").html(result);
    }});

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