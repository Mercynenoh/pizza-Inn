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


let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart= document.querySelector("#close-cart")
// cart working
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
};

// making function
function ready() {
    // remove items from cart
    let reomveCartButtons= document.getElementsByClassName("cart-remove");
    console.log(reomveCartButtons)
            for(let i=0; i<reomveCartButtons.length; i++){
                let button= reomveCartButtons[i];
                button.addEventListener("click", removeCartItem)
            }
            // quantity changes
            let quantityInputs = document.getElementsByClassName("cart-quantity");
            for (var i = 0; i < quantityInputs.length; i++) {
                let input = quantityInputs[i]
                input.addEventListener("change", quantityChanged);
            }
 // add to cart
 let addCart= document.getElementsByClassName("add-cart")
 for ( let i=0; i< addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener("click", addCartClicked);
    }
        }
        function removeCartItem(event){
            let buttonClicked = event.target
                 buttonClicked.parentElement.remove();
                 updatetotal();
         }

//  quantity changes
        function quantityChanged(event) { 
       let input = event.target
        if (isNaN(input.value) || input.value <=0){
         input.value = 1;
    }
    updatetotal();
}
        function addCartClicked(event) {
         let button = event.target;
         let shopProducts= button.parentElement;
         let title =shopProducts.getElementsByClassName("product-title")[0].innerText;
         let price =shopProducts.getElementsByClassName("price")[0].innerText;
         let productImg =shopProducts.getElementsByClassName("product-img")[0].src;
          console.log(title, price, productImg)
          addProductToCart(title, price,productImg)
          updatetotal();
}
         function addProductToCart(title, price, productImg){
         let cartShopBox = document.createElement("div");
         cartShopBox.classList.add("cart-box");
         let cartItems = document.getElementsByClassName("cart-content")[0];
         let cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
         for ( let i=0; i > cartItemsNames.length; i++) {
         alert('item has been added to cart');
         return;    
        //  update total
         }
        
        let cartBoxContent =`<img src="${productImg}" class="cart-img" id="img">
                             <div class="detail-box">
                             <div class="cart-product-title">${title}</div>
                             <div class="cart-price">${price}</div>
                             <input type="number" value="1" class="cart-quantity">
                             </div>
                             <i class='bx bx-trash cart-remove' ></i>`

                             cartShopBox.innerHTML = cartBoxContent;
          cartItems.append(cartShopBox); 
          cartShopBox.getElementsByClassName("cart-remove") [0]
          .addEventListener("click", removeCartItem);   
           cartShopBox.getElementsByClassName('cart-quantity')[0]
        }
         function updatetotal(){
            let cartContent = document.getElementsByClassName("cart-content")[0];
            let cartBoxes = cartContent.getElementsByClassName("cart-box");
            let total = 0;
            for ( let i=0; i< cartBoxes.length; i++){
                let cartBox = cartBoxes [i];
                let priceElement = cartBox.getElementsByClassName("cart-price")[0];
                let quantityElement= cartBox.getElementsByClassName("cart-quantity")[0];
                let price = priceElement.innerText.replace("Ksh", "");
                let quantity = quantityElement.value;
                total =total + (price * quantity);
                document.getElementsByClassName("total-price")[0].innerText = "Ksh" + total;
            }
        }






            
            

//          // remove items from cart


 //  quantity changes
// function quantityChanged(event) {
//     let input = event.target;
//     if (isNaN(input.value) || input.value <=0){
//         input.value = 1;
//     }
//     updatetotal();
// }


//     }


// let cartBoxContent =`
//       <img src="${productImg}" class="cart-img" id="img"></img>
//       <div class="detail-box">
//       <div class="cart-product-title">${title}</div>
//       <div class="cart-price">Ksh 500</div>
//       <input type="number" value="1" class="cart-quantity">
//       </div>
//       <!-- remove cart -->
//       <i class='bx bx-trash cart-remove' ></i>`;

      
// }
//  
