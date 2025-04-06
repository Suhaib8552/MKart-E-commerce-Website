const products=[
    {
        id:0,
        image:'../images/products/vivo-v50.webp',
        title: 'Vivo V50 Mobile',
        price: 34499,
    },

    {
        id:1,
        image:'../images/products/Zebronics-Fame-Wireless-Bluetooth-Speaker.webp',
        title: 'Zebronics Fame Wireless Bluetooth-Speaker',
        price: 849,
    },

    {
        id:2,
        image:'../images/products/Sony-HT-S500RF-Wired-Speaker.jpg',
        title: 'Sony HT-S500RF Wired Speaker',
        price: 36928,
    },

    {
        id:3,
        image:'../images/products/samsung-galaxy-s25-ultra.avif',
        title: 'Samsung galaxy s25 Ultra Mobile',
        price: 141999,
    },

    {
        id:4,
        image:'../images/products/realme-14pro.jpg',
        title: 'realme 14 pro Mobile',
        price: 21994,
    },

    {
        id:5,
        image:'../images/products/nothing-phone-3a.jpg',
        title: 'nothing phone 3a Mobile',
        price: 31600,
    },

    {
        id:6,
        image:'../images/products/msi-crosshair-16.jpg',
        title: 'msi crosshair 16 Laptop',
        price: 162990,
    },

    {
        id:7,
        image:'../images/products/jbl-speaker.jpg',
        title: 'jbl go 2 wireless Speaker',
        price: 3499,
    },

    {
        id:8,
        image:'../images/products/iphone16e.webp',
        title: 'iphone 16 e Mobile',
        price: 89900,
    },

    {
        id:9,
        image:'../images/products/hp-omnibook-ultraflip-14.webp',
        title: 'hp omnibook ultraflip 14 Laptop',
        price: 213581,
    },

    {
        id:10,
        image:'../images/products/dell-xps-16.webp',
        title: 'dell xps 16 Laptop',
        price: 308813,
    },

    {
        id:11,
        image:'../images/products/dell-inspiron-16-plus.jpg',
        title: 'Dell Inspiron 16 plus',
        price: 79489,
    },

    {
        id:12,
        image:'../images/products/boat-stone-1000.jpg',
        title: 'Boat Stone 1000',
        price: 2299,
    },

    {
        id:13,
        image:'../images/products/asus-vivobook-16x.webp',
        title: 'Asus Vivobook 16x',
        price: 60990,
    },

];

const categories = [...new Set(products.map((item) => item))];

document.getElementById("item-list").innerHTML = categories.map((item) => {
    var { image, title, price, id } = item;
    return (
        `<div class="box">
            <div class="img-box">
                <img class="images" src="${image}" alt="${title}">
            </div>
            <div class="bottom">
                <p>${title}</p>
                <h2>Rs. ${price}.00</h2>
                <button class="add-to-cart" onclick="addToCart(${id})">Add to Cart</button>
            </div>
        </div>`
    );
}).join('');

// Add to Cart Function
function addToCart(id) {
    let carts = JSON.parse(localStorage.getItem('carts')) || [];
    let product = products.find((item) => item.id === id);

    // Check if product is already in cart
    let existingProduct = carts.find((item) => item.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        carts.push(product);
    }

    localStorage.setItem('carts', JSON.stringify(carts));
    alert(`${product.title} added to cart`);
}


// Function to display products
function displayProducts(filteredProducts) {
    document.getElementById("item-list").innerHTML = filteredProducts.map((item) => {
        var { image, title, price, id } = item;
        return (
            `<div class="box">
                <div class="img-box">
                    <img class="images" src="${image}" alt="${title}">
                </div>
                <div class="bottom">
                    <p>${title}</p>
                    <h2>Rs. ${price}.00</h2>
                    <button class="add-to-cart" onclick="addToCart(${id})">Add to Cart</button>
                </div>
            </div>`
        );
    }).join('');
}

// Initial display of all products
displayProducts(categories);

// Search functionality
document.getElementById("searchInput").addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = categories.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

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

