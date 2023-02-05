$(document).ready(function() {
$.ajax({url:"../html/navbar.html", success:function(result){
    $("nav.bg-dark").html(result);
}});

$.ajax({url:"../html/footer.html", success:function(result){
    $("footer").html(result);
}});

});