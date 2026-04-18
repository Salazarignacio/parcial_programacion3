import { products } from "../../../data/data";
import { agregarAlCarrito } from "../../../utils/cart";

const productosDiv = document.getElementById("seccion-productos");

/* Mostrar nombre, precio y cantidad de cada producto */
if (productosDiv) {
  productosDiv.innerHTML = products
    .map(
      (producto) => `
      <div class="producto">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio.toLocaleString()}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <div><img src="${producto.img}" alt="${producto.nombre}"></div>
        <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
      </div>
    `,
    )
    .join("");
}

const botones = document.querySelectorAll(".btn-agregar");

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = Number(btn.getAttribute("data-id"));
    agregarAlCarrito(id, products);
  });
});
