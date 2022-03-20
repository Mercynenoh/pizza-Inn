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

// cart working
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
};
function ready() {
    // remove items from cart
    let reomveCartButtons= document.getElementsByClassName("cart-remove");
    console.log(reomveCartButtons)
            for(let i=0; i<reomveCartButtons.length; i++){
                let button= reomveCartButtons[i];
                button.addEventListener("click", removeCartItem)
            }
        }
        
