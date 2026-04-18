 import type  Categoria from "./categoria";

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  cantidad: number;
  categoria: Categoria;
}