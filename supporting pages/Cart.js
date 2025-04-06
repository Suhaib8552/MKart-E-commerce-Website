// Load Cart Items
function loadCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('carts')) || [];
    const cartContainer = document.querySelector('.cart-items');
    const totalContainer = document.querySelector('#total');
    const lengthContainer=document.querySelector('.item-length h2');

    let length=0;
    let total = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = `<h2 style="margin-top:20%; margin-left:25%;" >Your cart is empty.</h2>`;
    
        totalContainer.innerText = 'Rs. 0.00';
        lengthContainer.innerText='0';
        return;
    }

    cartContainer.innerHTML = cartItems.map(item => {
        total += item.price * item.quantity;
        length+=item.quantity;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <h4>${item.title}</h4>
                <h5>Rs. ${item.price}.00</h5>
                <div class="quantity">
                    <button class="quan-btn" onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quan-btn" onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <button class="remove-item" onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;
    }).join('');

    totalContainer.innerText = `Rs. ${total}.00`;
    lengthContainer.innerText= `${length}`;
}

// Increase Quantity
function increaseQuantity(id) {
    let cartItems = JSON.parse(localStorage.getItem('carts'));
    let product = cartItems.find(item => item.id === id);
    product.quantity += 1;
    localStorage.setItem('carts', JSON.stringify(cartItems));
    loadCartItems();
}

// Decrease Quantity
function decreaseQuantity(id) {
    let cartItems = JSON.parse(localStorage.getItem('carts'));
    let product = cartItems.find(item => item.id === id);

    if (product.quantity > 1) {
        product.quantity -= 1;
    } else {
        cartItems = cartItems.filter(item => item.id !== id);
    }

    localStorage.setItem('carts', JSON.stringify(cartItems));
    loadCartItems();
}

// Remove Item
function removeItem(id) {
    let cartItems = JSON.parse(localStorage.getItem('carts'));
    cartItems = cartItems.filter(item => item.id !== id);
    
    localStorage.setItem('carts', JSON.stringify(cartItems));
    loadCartItems();
}

// Initial Load
window.onload = loadCartItems;


document.querySelector('.proceed-check').addEventListener('click', function() {
    let cartItems = JSON.parse(localStorage.getItem('carts')) || [];

    if (cartItems.length === 0) {
        // Display message if cart is empty
        const message = document.querySelector('.cart-items');
        message.innerHTML = `<h2 style="margin-top:20%; margin-left:25%;" >Add items to the cart to checkout.</h2>`;
        return;
    }

    // Clear local storage for cart items
    localStorage.removeItem('carts');

    // Clear cart items from the page
    const message = document.querySelector('.cart-items');
    message.innerHTML = `<h2 style="margin-top:20%; margin-left:25%;" >Thank you for shopping with <em>M</em>Kart!!</h2>`;
    document.querySelector('.item-length h2').innerText = '0';
    document.querySelector('#total').innerText = 'Rs. 0.00';

    // Display ordered successfully message
    alert('Ordered Successfully!!');
});


//subscribe func

const subscribeBtn=document.getElementById("subscribe-btn");
const subscribeMsg=document.getElementById("Subscribe-msg");
const closeBtn=document.getElementById("closeBtn");
const subscribeInput=document.getElementById("newsletter1");
subscribeBtn.addEventListener("click",function(){
    if(subscribeInput.value!=""){

        subscribeMsg.style.display="flex";
    subscribeMsg.style.justifyContent="center";
    
    closeBtn.style.padding=".5% 2%";
    closeBtn.style.marginLeft="1%";
    closeBtn.style.backgroundColor="#fff";
    closeBtn.style.color="black";
    closeBtn.style.borderRadius="5%";
    closeBtn.style.fontWeight="500";
    subscribeMsg.append(closeBtn);

    closeBtn.addEventListener("click",function(){
        subscribeMsg.style.display="none";
    })
    }
    subscribeInput.value="";
    
})