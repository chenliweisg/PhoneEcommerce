$(document).ready(function() {

    $.ajax({url:"../html/navbar.html", success:function(result){
        $("nav.bg-dark").html(result);
    }});
    
    $.ajax({url:"../html/footer.html", success:function(result){
        $("footer").html(result);
    }});

    function hideOnlinePayment(d){
        $('.online-payment').hide();
        if (d.ctrlKey)
        {
            console.log('crtl key is pressed')
        }
    }

    function unhideOnlinePayment(event){
        $('.online-payment').show();
    }
    
    $("#cash-payment").on("click",function(event){
        hideOnlinePayment(event)
    });

    $("#online-payment").on("click",function(event){
        unhideOnlinePayment(event)
    });

});