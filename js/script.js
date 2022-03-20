$(document).ready(function(){
    $("#first").click(function(){
        $(".crispy").toggle()
});
$("#second").click(function(){
    $(".glutten").toggle()
});
$("#third").click(function(){
    $(".stuffed").toggle()
});
$("#fourth").click(function(){
    $(".top").toggle()
});
});

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
};