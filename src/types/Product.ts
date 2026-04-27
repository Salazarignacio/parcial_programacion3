import type { ICategory } from "./Category";

export interface IProducto {
  id: number;
  eliminado: boolean;
  createdAt: string;
  nombre: string;
  precio: number;
  descripcion: string;
  stock: number;
  imagen: string;
  cantidad?: number;
  disponible: boolean;
  categorias: ICategory[];
}
