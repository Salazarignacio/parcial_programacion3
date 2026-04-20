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
  botonesDiv.classList.add("btn-categoria");
  botonesDiv.appendChild(btn);
  
});

function render(prods: Producto[]): void {
  if (productosDiv) {
    productosDiv.innerHTML = "";
    const productosDiv2 = document.createElement("div");
    productosDiv2.classList.add("busqueda-productos");
    productosDiv2.appendChild(inputBusqueda);
    productosDiv2.appendChild(botonesDiv);
    productosDiv.appendChild(productosDiv2);
    
    inputBusqueda.focus();
    
    if (prods.length === 0) {
      productosDiv.innerHTML +=
      "<p>No se encontraron productos.</p> <button id='btn-volver'>Volver a ver todos</button>";
      const btnVolver = document.getElementById("btn-volver");
      
      btnVolver?.addEventListener("click", () => {
        render(products);
      });
      
      return;
    }
    const productosDiv3 = document.createElement("div");
    productosDiv3.classList.add("listado-productos");

    prods.forEach((producto: Producto) => {
      const div = document.createElement("div");
      div.classList.add("producto");

      div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <div><img src="${producto.img}" alt="${producto.nombre}"></div>
      <p>$${producto.precio.toLocaleString()}</p>
      <button class="btn-agregar" data-id="${producto.id}">Agregar</button>
    `;
      productosDiv3.appendChild(div);
    });
    productosDiv.appendChild(productosDiv3);
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
  const filtradosproducts = products.filter((p) =>
    p.nombre.toLowerCase().includes(query),
  );

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
