import type { Producto } from "../types/Product";
import { getProduct, saveProduct } from "./localStorage";

export const agregarAlCarrito = (id: number, products: Producto[]) => {
  const producto = products.find((p) => p.id === id);
  const productsCart: Producto[] = getProduct()
    ? JSON.parse(getProduct() as string)
    : [];

  if (producto) {
    const productoEnCarrito = productsCart.find((p) => p.id === id);

    if (productoEnCarrito) {
      productoEnCarrito.cantidad += 1;
    } else {
      productsCart.push({ ...producto, cantidad: 1 });
    }

    saveProduct(productsCart);
    console.log(productsCart);
  }
};
