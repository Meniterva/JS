var products = [
        {name: "Джинсы", price: 3700},
        {name: "Ботинки",price: 1000},
        {name: "Куртка",price: 5000},
      ];

var $catalog = document.getElementById("catalog");
var $template = document.getElementById("template");

function buildCatalog(products) {
    for (var i = 0; i < products.length; i++) {
        var $item = $template.children[0].cloneNode(true);
        
        $item.querySelector(".name").textContent = products[i].name;
        $item.querySelector(".price").textContent = products[i].price;
        $catalog.appendChild($item);
    }
}

buildCatalog(products);

var cart = [];
var $cart = document.getElementById("cart");

function buildTotal(cart) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum = sum + cart[i].price * cart[i].quantity;
    }
    var $span = document.createElement("span");
    if (cart.length === 0) {
        $span.textContent = "Корзина пуста";
    }
    else {
        $span.textContent = "Общая сумма покупок " + sum + " рублей";
    }
    $cart.appendChild($span);
}
buildTotal(cart);

function init() {
    
    $catalog.addEventListener("click", handleCatalogClick);
}

function handleCatalogClick(event) {
    if(event.target.tagName === "BUTTON") {
    
    var $price = event.target.parentElement.getElementsByClassName("price")[0];
    var $name = event.target.parentElement.getElementsByClassName("name")[0];
    
    
        
    cart.push({name: $name.textContent, price: +$price.textContent, quantity: 1});
        
        
    buildTotal(cart);
    }
    
}

window.addEventListener("load", init);