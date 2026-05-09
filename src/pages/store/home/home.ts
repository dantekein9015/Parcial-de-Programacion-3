import { PRODUCTS } from "../../../data/data";
import type { Product, CartItem } from "../../../types/product";

const productsContainer = document.getElementById("productsContainer") as HTMLDivElement;
const categoriesContainer = document.getElementById("categoriesContainer") as HTMLDivElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const cartLink = document.getElementById("cartLink") as HTMLAnchorElement;

const CART_KEY = "food_store_cart";

let selectedCategory = "Todas";
let searchText = "";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

function getCart(): CartItem[] {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function updateCartCounter(): void {
  const cart = getCart();

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  if (cartLink) {
    cartLink.textContent = `Carrito (${totalItems})`;
  }
}

function addToCart(product: Product): void {
  const cart = getCart();

  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    const newItem: CartItem = {
      ...product,
      quantity: 1
    };

    cart.push(newItem);
  }

  saveCart(cart);
  updateCartCounter();

  alert(`${product.name} agregado al carrito`);
}

function renderProducts(): void {
  productsContainer.innerHTML = "";

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory =
      selectedCategory === "Todas" || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `
      <p id="emptyMessage">No se encontraron productos.</p>
    `;
    return;
  }

  filteredProducts.forEach(product => {
    const article = document.createElement("article");

    article.innerHTML = `
      <img 
        src="${product.image}" 
        alt="${product.name}"
        onerror="this.src='https://placehold.co/600x400?text=Imagen+no+disponible'"
      >

      <h3>${product.name}</h3>
      <p>Categoría: ${product.category}</p>
      <p>Precio: ${formatPrice(product.price)}</p>

      <button type="button">Agregar al carrito</button>
    `;

    const button = article.querySelector("button") as HTMLButtonElement;

    button.addEventListener("click", () => {
      addToCart(product);
    });

    productsContainer.appendChild(article);
  });
}

function renderCategories(): void {
  categoriesContainer.innerHTML = "";

  const categories = [
    "Todas",
    ...new Set(PRODUCTS.map(product => product.category))
  ];

  categories.forEach(category => {
    const button = document.createElement("button");
    button.textContent = category;

    if (category === selectedCategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      selectedCategory = category;
      renderCategories();
      renderProducts();
    });

    categoriesContainer.appendChild(button);
  });
}

searchInput.addEventListener("input", () => {
  searchText = searchInput.value;
  renderProducts();
});

renderCategories();
renderProducts();
updateCartCounter();