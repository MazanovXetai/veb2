let cart = [];
let cartVisible = false;

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartCountEl = document.getElementById('cart-count');
  const cartTotalEl = document.getElementById('cart-total');

  cartItemsEl.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ${item.price} AZN <button onclick="removeFromCart(${index})">Sil</button>`;
    cartItemsEl.appendChild(li);
    total += item.price;
  });

  cartCountEl.innerText = cart.length;
  cartTotalEl.innerText = `Cəmi: ${total} AZN`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function toggleCart() {
  const popup = document.getElementById('cart-popup');
  cartVisible = !cartVisible;
  popup.style.display = cartVisible ? 'block' : 'none';
}
