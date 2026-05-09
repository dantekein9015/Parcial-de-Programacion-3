import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <main class="landing">
      <section class="landing-card">
        <span class="badge">Programación III</span>

        <h1>Food Store</h1>

        <p>
          Aplicación frontend desarrollada con HTML, CSS, JavaScript y TypeScript.
          Permite visualizar productos, buscar por nombre, filtrar por categoría
          y gestionar un carrito persistente con localStorage.
        </p>

        <div class="landing-actions">
          <a class="primary-link" href="/src/pages/store/home/home.html">
            Ir al catálogo
          </a>

          <a class="secondary-link" href="/src/pages/store/cart/cart.html">
            Ver carrito
          </a>
        </div>
      </section>
    </main>
  `;
}