import { products, getCategories } from "../../../data/data";
import type { ICategory } from "../../../types/categoria";
import type { IProducto } from "../../../types/Product";
import { agregarAlCarrito } from "../../../utils/cart";

const productosDiv = document.getElementById("seccion-productos");
const inputBusqueda = document.createElement("input");
const botonesDiv = document.createElement("div");

inputBusqueda.type = "text";
inputBusqueda.placeholder = "Buscar productos...";
inputBusqueda.addEventListener("input", manejarInputBusqueda);

botonesDiv.classList.add("botones");

getCategories().forEach((categoria: ICategory) => {
  const btn = document.createElement("button");
  btn.textContent = categoria.nombre;
  botonesDiv.classList.add("btn-categoria");
  botonesDiv.appendChild(btn);
});

function render(prods: IProducto[]): void {
  if (productosDiv) {
    productosDiv.innerHTML = "";
    const productosDiv2 = document.createElement("div");
    productosDiv2.classList.add("busqueda-productos");
    productosDiv2.appendChild(inputBusqueda);
    productosDiv2.appendChild(botonesDiv);
    productosDiv.appendChild(productosDiv2);

    inputBusqueda.focus();

    if (prods.length === 0) {
      productosDiv.innerHTML += `<div class="sin-productos"><p>No se encontraron productos.</p> <button id='btn-volver'>Volver a ver todos</button></div>`;
      const btnVolver = document.getElementById("btn-volver");

      btnVolver?.addEventListener("click", () => {
        render(products);
      });
      return;
    }
    const productosDiv3 = document.createElement("div");
    productosDiv3.classList.add("listado-productos");

    prods.forEach((producto: IProducto) => {
      const div = document.createElement("div");
      div.classList.add("producto");

      div.innerHTML = `
      <h3>${producto.nombre}</h3>
<div class="contenedor-agregar"><img src="${producto.imagen}" alt="${producto.nombre}"></div>
<p class="descripcion">${producto.descripcion}</p>
<p class="precio">$${producto.precio.toLocaleString()}</p>
<div class="agregar-carrito">

<input type="number" min="1" max="${producto.stock}" value="1" id="cantidad-${producto.id}" class="input-cantidad">
<button class="btn-agregar" data-id="${producto.id}">Agregar</button>

</div>
    `;
      productosDiv3.appendChild(div);
    });
    productosDiv.appendChild(productosDiv3);
    manejarAgregarAlCarrito();
  }
}

botonesDiv.addEventListener("click", (e) => {
  const target = e.target as HTMLButtonElement;
  const filtradosproducts: IProducto[] = products.filter((p) =>
    p.categorias.some((c: ICategory) => c.nombre === target.textContent),
  );
  render(filtradosproducts);
});

function manejarInputBusqueda(e: Event): void {
  const query = (e.target as HTMLInputElement).value.toLowerCase();
  const filtradosproducts: IProducto[] = products.filter((p) =>
    p.nombre.toLowerCase().includes(query),
  );

  render(filtradosproducts);
}

function manejarAgregarAlCarrito(): void {
  const botones = document.querySelectorAll(".btn-agregar");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      const cantidad = Number((document.getElementById(`cantidad-${id}`) as HTMLInputElement)?.value) || 1;
      agregarAlCarrito(id, products, cantidad);
    });
  });
}

render(products);
