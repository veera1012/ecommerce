let cart = [];
let totalPrice = 0;


function addToCart(productName, productPrice) {
    cart.push({name: productName, price: productPrice});
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    cartItems.innerHTML = '';  // Clear current cart items
    cart.forEach((item, index) => {
        const li = document.createElement('li');  // Create a new list item
        li.textContent = `${item.name} - RS${item.price.toFixed(2)}`;  // Set text content
        
        const deleteButton = document.createElement('button');  // Create delete button
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => removeFromCart(index);  // Set onclick event
        
        li.appendChild(deleteButton);  // delete button to list item
        cartItems.appendChild(li);  //  list item to cart items list
    });
    
    // Calculate and update the total price
    totalPrice = cart.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);  // Remove item from cart array by index
    updateCart();  // Update the cart display
}
