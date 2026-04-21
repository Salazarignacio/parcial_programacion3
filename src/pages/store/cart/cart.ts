import type { Producto } from "../../../types/Product";
import { eliminarDelCarrito } from "../../../utils/cart";
import { getProduct } from "../../../utils/localStorage";


const seccionDiv = document.getElementById("seccion-carrito");
const carritoDiv = document.createElement("div");
carritoDiv.classList.add("seccion-carrito");
seccionDiv?.appendChild(carritoDiv);
const cartItems: Producto[] = getProduct()
  ? JSON.parse(getProduct() as string)
  : [];
const totalDiv = document.createElement("div");

function renderCart(): void {
  if (cartItems.length === 0) {
    if (carritoDiv) {
      carritoDiv.innerHTML = "<p>El carrito está vacío.</p>";
    }
  } else {
    if (carritoDiv) {
      carritoDiv.innerHTML = cartItems
        .map(
          (producto) => `
      <div class="producto">
        <h3>${producto.nombre}</h3>
        <div><img src="${producto.img}" alt="${producto.nombre}"></div>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>:$${producto.precio.toLocaleString()}</p>
        <p> Subtotal: $${(producto.precio * producto.cantidad).toLocaleString()}</p>
        <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
      </div>
    `,
        )
        .join("");
    }
  }

  const botones = document.querySelectorAll(".btn-eliminar");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      eliminarDelCarrito(id);
    });
  });

  const total = cartItems.reduce((acc, producto) => {
    return acc + producto.precio * producto.cantidad;
  }, 0);

  totalDiv.innerHTML = `<h2>Total: $${total.toLocaleString()}</h2>`;
  totalDiv.classList.add("total");
  if (seccionDiv) {
    seccionDiv.appendChild(totalDiv);
  }
}

renderCart();
