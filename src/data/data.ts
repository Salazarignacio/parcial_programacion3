import type { Producto } from "../types/producto.ts";
import type { Categoria } from "../types/Categoria.ts";

export const categories: Categoria[] = [
  {
    id: 1,
    nombre: "Audio",
  },
  {
    id: 2,
    nombre: "Periféricos",
  },
  {
    id: 3,
    nombre: "Monitores",
  },
  {
    id: 4,
    nombre: "Accesorios",
  },
  {
    id: 5,
    nombre: "Almacenamiento",
  },
];

export const products: Producto[] = [
  {
    id: 1,
    nombre: "Auriculares Bluetooth",
    precio: 15000,
    categoria: categories[0],
    img: "auriculares.jpg",
  },
  {
    id: 2,
    nombre: "Parlante Portátil",
    precio: 22000,
    categoria: categories[0],
    img: "parlante.jpg",
  },
  {
    id: 3,
    nombre: "Mouse Gamer",
    precio: 12000,
    categoria: categories[1],
    img: "mouse.jpg",
  },
  {
    id: 4,
    nombre: "Teclado Mecánico",
    precio: 30000,
    categoria: categories[1],
    img: "teclado.jpg",
  },
  {
    id: 5,
    nombre: "Monitor 24''",
    precio: 180000,
    categoria: categories[2],
    img: "monitor.jpg",
  },
  {
    id: 6,
    nombre: "Soporte para Notebook",
    precio: 8000,
    categoria: categories[3],
    img: "soporte.jpg",
  },
  {
    id: 7,
    nombre: "Webcam HD",
    precio: 25000,
    categoria: categories[3],
    img: "webcam.jpg",
  },
  {
    id: 8,
    nombre: "Disco SSD 1TB",
    precio: 95000,
    categoria: categories[4],
    img: "ssd.jpg",
  },
  {
    id: 9,
    nombre: "Pendrive 64GB",
    precio: 10000,
    categoria: categories[4],
    img: "pendrive.jpg",
  },
];
