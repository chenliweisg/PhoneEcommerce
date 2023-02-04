$(document).ready(function() {
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