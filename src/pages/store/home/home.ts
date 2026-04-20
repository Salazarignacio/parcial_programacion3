import { products, categories } from "../../../data/data";
import type Categoria from "../../../types/categoria";
import type { Producto } from "../../../types/Product";
import { agregarAlCarrito } from "../../../utils/cart";

const productosDiv = document.getElementById("seccion-productos");
const inputBusqueda = document.createElement("input");
const botonesDiv = document.createElement("div");

inputBusqueda.type = "text";
inputBusqueda.placeholder = "Buscar productos...";
inputBusqueda.addEventListener("input", manejarInputBusqueda);

botonesDiv.classList.add("botones");

categories.forEach((categoria: Categoria) => {
  const btn = document.createElement("button");
  btn.textContent = categoria.nombre;
  botonesDiv.appendChild(btn);
});

function render(prods: Producto[]): void {
  if (productosDiv) {
    productosDiv.innerHTML = "";
    productosDiv.appendChild(inputBusqueda);
    productosDiv.appendChild(botonesDiv);
    inputBusqueda.focus();

    prods.forEach((producto: Producto) => {
      const div = document.createElement("div");
      div.classList.add("producto");

      div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio.toLocaleString()}</p>
      <div><img src="${producto.img}" alt="${producto.nombre}"></div>
      <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
    `;
      productosDiv.appendChild(div);
    });
    manejarAgregarAlCarrito();
  }
}

botonesDiv.addEventListener("click", (e) => {
  const target = e.target as HTMLButtonElement;
  const filtradosproducts = products.filter(
    (p) => p.categoria.nombre === target.textContent,
  );
  render(filtradosproducts);
});

function manejarInputBusqueda(e: Event): void {
  const query = (e.target as HTMLInputElement).value.toLowerCase();
  const filtradosproducts = products.filter((p) => p.nombre.toLowerCase().includes(query));
  
  render(filtradosproducts);
}

function manejarAgregarAlCarrito(): void {
  const botones = document.querySelectorAll(".btn-agregar");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      agregarAlCarrito(id, products);
    });
  });
}

render(products);
