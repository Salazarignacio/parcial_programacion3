import type { Producto } from "../../../types/Product";
import { eliminarDelCarrito } from "../../../utils/cart";
import { getProduct } from "../../../utils/localStorage";

getProduct

const carritoDiv = document.getElementById("seccion-carrito");

const cartItems: Producto[] = getProduct()  ? JSON.parse(getProduct() as string)
  : [];

/* Mostrar nombre, precio y cantidad de cada producto en el carrito */
if (carritoDiv) {
  carritoDiv.innerHTML = cartItems.map(
      (producto) => `
      <div class="cart">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio.toLocaleString()}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <div><img src="${producto.img}" alt="${producto.nombre}"></div>
        <button class="btn-eliminar" data-id="${producto.id}">Eliminar del carrito</button>
      </div>
    `,
    )
    .join("");
}

const botones = document.querySelectorAll(".btn-eliminar");

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = Number(btn.getAttribute("data-id"));
    eliminarDelCarrito(id);
  });
});