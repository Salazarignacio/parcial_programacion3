import { products } from "../../../data/data";
import { agregarAlCarrito } from "../../../utils/cart";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const productoDiv = document.getElementById("product-detail");

const producto = products.find((p) => p.id === id);

if (producto && productoDiv) {
  productoDiv.innerHTML = `
  <div class="producto-detail">
  <h2>${producto.nombre}</h2>
  <img src="${producto.imagen}" />
      <p>${producto.descripcion}</p>

      <p class="precio">$${producto.precio.toLocaleString()}</p>
      <div class="agregar-carrito">
      <span>Stock disponible: ${producto.stock}</span>
      <input type="number" min="1" max="${producto.stock}" value="1" id="cantidad-${producto.id}" class="input-cantidad">
      <button class="btn-agregar" data-id="${producto.id}">Agregar</button>
  </div>
    `;

  const btnAgregar = document.querySelector(`.btn-agregar[data-id="${id}"]`);

  btnAgregar?.addEventListener("click", () => {
    const cantidad =
      Number(
        (document.getElementById(`cantidad-${id}`) as HTMLInputElement)?.value,
      ) || 1;

    agregarAlCarrito(id, products, cantidad);
  });
}
