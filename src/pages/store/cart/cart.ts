import type { CartItem } from "../../../types/product";

const cartContainer = document.getElementById("cartContainer") as HTMLElement;
const totalContainer = document.getElementById("totalContainer") as HTMLElement;
const clearCartButton = document.getElementById("clearCartButton") as HTMLButtonElement;

const CART_KEY = "food_store_cart";

function getCart(): CartItem[] {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

function increaseQuantity(productId: number): void {
  const cart = getCart();

  const item = cart.find(product => product.id === productId);

  if (item) {
    item.quantity += 1;
  }

  saveCart(cart);
  renderCart();
}

function decreaseQuantity(productId: number): void {
  let cart = getCart();

  const item = cart.find(product => product.id === productId);

  if (item) {
    item.quantity -= 1;

    if (item.quantity <= 0) {
      cart = cart.filter(product => product.id !== productId);
    }
  }

  saveCart(cart);
  renderCart();
}

function removeItem(productId: number): void {
  const cart = getCart().filter(item => item.id !== productId);

  saveCart(cart);
  renderCart();
}

function renderCart(): void {
  const cart = getCart();

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <p id="emptyMessage">El carrito está vacío.</p>
    `;
    totalContainer.textContent = "Total: $0.00";
    return;
  }

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;

    const article = document.createElement("article");
    article.className = "cart-item";

    article.innerHTML = `
      <img
        class="cart-item-image"
        src="${item.image}"
        alt="${item.name}"
        onerror="this.src='https://placehold.co/600x400?text=Imagen+no+disponible'"
      />

      <div class="cart-item-content">
        <div class="cart-item-header">
          <div>
            <h3>${item.name}</h3>
            <p class="cart-item-category">${item.category}</p>
          </div>
          <p class="cart-item-price">Precio unitario: <strong>${formatPrice(item.price)}</strong></p>
        </div>

        <div class="cart-item-info">
          <p>Cantidad actual: <strong>${item.quantity}</strong></p>
          <p>Subtotal: <strong>${formatPrice(subtotal)}</strong></p>
        </div>

        <div class="cart-item-actions">
          <div class="quantity-controls">
            <button class="decrease" type="button">-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="increase" type="button">+</button>
          </div>

          <button class="remove btn-remove" type="button">Eliminar</button>
        </div>
      </div>
    `;

    const increaseButton = article.querySelector(".increase") as HTMLButtonElement;
    const decreaseButton = article.querySelector(".decrease") as HTMLButtonElement;
    const removeButton = article.querySelector(".remove") as HTMLButtonElement;

    increaseButton.addEventListener("click", () => {
      increaseQuantity(item.id);
    });

    decreaseButton.addEventListener("click", () => {
      decreaseQuantity(item.id);
    });

    removeButton.addEventListener("click", () => {
      removeItem(item.id);
    });

    cartContainer.appendChild(article);
  });

  const total = calculateTotal(cart);
  totalContainer.innerHTML = `Total: <strong>${formatPrice(total)}</strong>`;
}

clearCartButton.addEventListener("click", () => {
  localStorage.removeItem(CART_KEY);
  renderCart();
});

renderCart();