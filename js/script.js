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

// making function
function ready() {
    // remove items from cart
    let removeCartButtons= document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons)
            for(let i=0; i<removeCartButtons.length; i++){
                let button= removeCartButtons[i];
                button.addEventListener("click", removeCartItem)
            }
            // quantity changes
            let quantityInputs = document.getElementsByClassName("cart-quantity");
            for (var i = 0; i < quantityInputs.length; i++) {
                let input = quantityInputs[i];
                input.addEventListener("change", quantityChanged);
            }
            
        }

         // remove items from cart

 function removeCartItem(event){
    let buttonClicked = event.target
         buttonClicked.parentElement.remove();
         updatetotal();
 }
 //  quantity changes
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <=0){
        input.value = 1;
    }
    updatetotal();
}

//  update total
 function updatetotal(){
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;
    for ( let i=0; i< cartBoxes.length; i++){
        let cartBox = cartBoxes [i];
        let priceElement = cartBox.getElementsByClassName("cart-price")[0];
        let quantityElement= cartBox.getElementsByClassName("cart-quantity")[0];
        let price = parseFloat(priceElement.innerText.replace("Ksh", ""));
        let quantity = quantityElement.value;
        total =total + (price * quantity);
        document.getElementsByClassName("total-price")[0].innerText = "Ksh" + total;
    }
}
