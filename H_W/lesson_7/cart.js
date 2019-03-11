var products = [
        {name: "Джинсы", price: 3700, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG00QZ-plRdK_G8zNmWYKP9hEVeyzp-8fO4wLDtT3Nsw2Nwhh2"},
        {name: "Ботинки", price: 1000, image: "https://ae01.alicdn.com/kf/HTB1jBHGqYSYBuNjSspiq6xNzpXaq/-.jpg_640x640.jpg"},
        {name: "Куртка", price: 5000, image:"https://www.auto-jack.com/images/models/LL_CONST_ZIMA/3037/IMG_4204.jpg"},
      ];

var $catalog = document.getElementById("catalog");
var $template = document.getElementById("template");

function buildCatalog(products) {
    for (var i = 0; i < products.length; i++) {
        var $item = $template.children[0].cloneNode(true);
        
        $item.querySelector(".name").textContent = products[i].name;
        $item.querySelector(".price").textContent = products[i].price;
        $item.querySelector(".image").src = products[i].image;

        $catalog.appendChild($item);
    }
}

buildCatalog(products);

var cart = [];
var $cart = document.getElementById("cart");
var $tmplCartItem = document.getElementById("tmplCartItem");

function buildTotal(cart) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum = sum + cart[i].price * cart[i].quantity;
        image = image + cart[i].quantity;
        
        var $item = $tmplCartItem.children[0].cloneNode(true);
        
        $item.querySelector(".name").textContent = cart[i].name;
        $item.querySelector(".price").textContent = cart[i].price;
        $item.querySelector(".quantity").textContent = cart[i].quantity;
        $item.querySelector(".image").src = cart[i].image;
        
         $cart.appendChild($item);
    }
    var $div = document.createElement("div");
    if (cart.length === 0) {
        $div.textContent = "Корзина пуста";
    }
    else {
        $div.textContent = "Общая сумма покупок " + sum + " рублей";
    }
    $cart.appendChild($div);
}
buildTotal(cart);

function init() {
    
    $catalog.addEventListener("click", handleCatalogClick);
}

function handleCatalogClick(event) {
    if(event.target.tagName === "BUTTON") {
    
    var $price = event.target.parentElement.getElementsByClassName("price")[0];
    var $name = event.target.parentElement.getElementsByClassName("name")[0];
    var $image = event.target.parentElement.getElementsByClassName("image")[0];
    
        
    cart.push({name: $name.textContent, price: +$price.textContent, quantity: 1, image: $image.src});
        
        
    buildTotal(cart);
    }
    
}

window.addEventListener("load", init);