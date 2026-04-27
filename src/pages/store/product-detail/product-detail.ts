import { products } from "../../../data/data";
import { agregarAlCarrito } from "../../../utils/cart";
import { getProduct } from "../../../utils/localStorage";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const productoDiv = document.getElementById("product-detail");
const cantidadProductos = document.getElementById(
  "cantidad-productos",
) as HTMLDivElement;

const producto = products.find((p) => p.id === id);

if (producto && productoDiv) {
  const cantidadEnCarrito =
    JSON.parse((getProduct() as string) || "[]").length || 0;
  cantidadProductos.innerHTML += `<p class="imagen-cart cantidad-productos">${cantidadEnCarrito}</p>`;
  productoDiv.innerHTML = `
  <div class="producto-detail">
  <img src="${producto.imagen}" />
  <div class="contenedor">
  <h2>${producto.nombre}</h2>
  <p>${producto.descripcion}</p>
  
  <p class="precio">$${producto.precio.toLocaleString()}</p>
  <div class="agregar-carrito">
  <p>Unidades disponibles: ${producto.stock}</p>
  <div>
  <p>Cantidad</p>
  <input type="number" min="1" max="${producto.stock}" value="1" id="cantidad-${producto.id}" class="input-cantidad">
  <button class="btn-agregar" data-id="${producto.id}">Agregar</button>
  </div>
  </div>
  
  
  
  </div>
    `;
/* 
    console.log(cantidadEnCarrito);
    
    productoDiv.appendChild(cantidadEnCarrito); */

  const btnAgregar = document.querySelector(`.btn-agregar[data-id="${id}"]`);

  btnAgregar?.addEventListener("click", () => {
    const cantidad =
      Number(
        (document.getElementById(`cantidad-${id}`) as HTMLInputElement)?.value,
      ) || 1;

    agregarAlCarrito(id, products, cantidad);
  });
}
