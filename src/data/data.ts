import type { Producto } from "../types/Product.ts";
import type Categoria from "../types/categoria.ts";

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
    cantidad: 1,
    img: "https://picsum.photos/seed/auriculares/300/300",
  },
  {
    id: 2,
    nombre: "Parlante Portátil",
    precio: 22000,
    categoria: categories[0],
    cantidad: 1,
    img: "https://picsum.photos/seed/parlante/300/300",
  },
  {
    id: 3,
    nombre: "Mouse Gamer",
    precio: 12000,
    categoria: categories[1],
    cantidad: 1,
    img: "https://picsum.photos/seed/mouse/300/300",
  },
  {
    id: 4,
    nombre: "Teclado Mecánico",
    precio: 30000,
    categoria: categories[1],
    cantidad: 1,
    img: "https://picsum.photos/seed/teclado/300/300",
  },
  {
    id: 5,
    nombre: "Monitor 24''",
    precio: 180000,
    categoria: categories[2],
    cantidad: 1,
    img: "https://picsum.photos/seed/monitor/300/300",
  },
  {
    id: 6,
    nombre: "Soporte para Notebook",
    precio: 8000,
    categoria: categories[3],
    cantidad: 1,
    img: "https://picsum.photos/seed/soporte/300/300",
  },
  {
    id: 7,
    nombre: "Webcam HD",
    precio: 25000,
    categoria: categories[3],
    cantidad: 1,
    img: "https://picsum.photos/seed/webcam/300/300",
  },
  {
    id: 8,
    nombre: "Disco SSD 1TB",
    precio: 95000,
    categoria: categories[4],
    cantidad: 1,
    img: "https://picsum.photos/seed/ssd/300/300",
  },
  {
    id: 9,
    nombre: "Pendrive 64GB",
    precio: 10000,
    categoria: categories[4],
    cantidad: 1,
    img: "https://picsum.photos/seed/pendrive/300/300",
  },
];
