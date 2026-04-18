import type { Categoria } from "./Categoria";

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  categoria: Categoria;
}