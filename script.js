let cart = [];

function toggleCart() {
    document.getElementById("cart-sidebar").classList.toggle("open");
}

function addToCart(name, price) {
    let existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let cartSubtotal = document.getElementById("cart-subtotal");
    let cartTax = document.getElementById("cart-tax");
    let cartDiscount = document.getElementById("cart-discount");
    let cartTotal = document.getElementById("cart-total");
    
    cartItems.innerHTML = "";
    let subtotal = 0;
    let itemCount = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        itemCount += item.quantity;
        let li = document.createElement("li");
        li.innerHTML = `${item.name} x${item.quantity} - Rp ${item.price * item.quantity}`;
        cartItems.appendChild(li);
    });
    
    let tax = subtotal * 0.1;
    let discount = subtotal > 100000 ? subtotal * 0.05 : 0;
    let total = subtotal + tax - discount;
    
    cartCount.innerText = itemCount;
    cartSubtotal.innerText = `Rp ${subtotal}`;
    cartTax.innerText = `Rp ${tax}`;
    cartDiscount.innerText = `Rp ${discount}`;
    cartTotal.innerText = `Rp ${total}`;
}

function checkout() {
    alert("Terima kasih telah berbelanja! Total yang harus dibayar: " + document.getElementById("cart-total").innerText);
    cart = [];
    updateCart();
}
