import { products, categories } from "../../../data/data";
import { agregarAlCarrito } from "../../../utils/cart";

const productosDiv = document.getElementById("seccion-productos");
const botonesDiv = document.createElement("div");
botonesDiv.classList.add("botones");

categories.forEach((categoria) => {
  const btn = document.createElement("button");
  btn.textContent = categoria.nombre;
  botonesDiv.appendChild(btn);
});

if (productosDiv) {
  productosDiv.innerHTML = ""; // limpio una sola vez

  productosDiv.appendChild(botonesDiv);

  products.forEach((producto) => {
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
botonesDiv.addEventListener("click", (e) => {
  const target = e.target as HTMLButtonElement;
  productosDiv!.innerHTML = "";
  productosDiv!.appendChild(botonesDiv);
  products
    .filter((p) => p.categoria.nombre === target.textContent)
    .forEach((producto) => {
      const productoDiv = document.createElement("div");
      productoDiv.classList.add("producto");
      productoDiv.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio.toLocaleString()}</p>
      <div><img src="${producto.img}" alt="${producto.nombre}"></div>
      <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
    `;
      productosDiv?.appendChild(productoDiv);
    });
  manejarAgregarAlCarrito();
});

function manejarAgregarAlCarrito() {
  const botones = document.querySelectorAll(".btn-agregar");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      agregarAlCarrito(id, products);
    });
  });
}
