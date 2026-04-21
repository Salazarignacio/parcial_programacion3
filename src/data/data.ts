import type { Producto } from "../types/Product.ts";
import type Categoria from "../types/categoria.ts";

export const categories: Categoria[] = [
  {
    id: 1,
    nombre: "Bebidas",
  },
  {
    id: 2,
    nombre: "Snacks",
  },
  {
    id: 3,
    nombre: "Comidas Preparadas",
  },
  {
    id: 4,
    nombre: "Lácteos",
  },
  {
    id: 5,
    nombre: "Panadería",
  },
];

export const products: Producto[] = [
  {
    id: 1,
    nombre: "Coca-Cola 1.5L",
    precio: 2500,
    categoria: categories[0],
    cantidad: 1,
    img: "https://picsum.photos/seed/cocacola/300/300",
  },
  {
    id: 2,
    nombre: "Jugo de Naranja",
    precio: 1800,
    categoria: categories[0],
    cantidad: 1,
    img: "https://picsum.photos/seed/jugo/300/300",
  },
  {
    id: 3,
    nombre: "Papas Fritas",
    precio: 1200,
    categoria: categories[1],
    cantidad: 1,
    img: "https://picsum.photos/seed/papas/300/300",
  },
  {
    id: 4,
    nombre: "Chocolate",
    precio: 1500,
    categoria: categories[1],
    cantidad: 1,
    img: "https://picsum.photos/seed/chocolate/300/300",
  },
  {
    id: 5,
    nombre: "Hamburguesa Completa",
    precio: 5500,
    categoria: categories[2],
    cantidad: 1,
    img: "https://picsum.photos/seed/hamburguesa/300/300",
  },
  {
    id: 6,
    nombre: "Pizza Muzzarella",
    precio: 7000,
    categoria: categories[2],
    cantidad: 1,
    img: "https://picsum.photos/seed/pizza/300/300",
  },
  {
    id: 7,
    nombre: "Leche Entera",
    precio: 2000,
    categoria: categories[3],
    cantidad: 1,
    img: "https://picsum.photos/seed/leche/300/300",
  },
  {
    id: 8,
    nombre: "Yogur",
    precio: 1300,
    categoria: categories[3],
    cantidad: 1,
    img: "https://picsum.photos/seed/yogur/300/300",
  },
  {
    id: 9,
    nombre: "Pan Fresco",
    precio: 900,
    categoria: categories[4],
    cantidad: 1,
    img: "https://picsum.photos/seed/pan/300/300",
  },
];
