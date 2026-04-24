import type { IUser } from "../types/IUser";
import type { IProducto } from "../types/Product";

export const saveUser = (user: IUser) => {
  const users: IUser[] = [];
  users.push(user);
  localStorage.setItem("userData", JSON.stringify(users));
};
export const getUSer = () => {
  return localStorage.getItem("userData");
};
export const removeUser = () => {
  localStorage.removeItem("userData");
};

export const saveProduct = (product: IProducto[]) => {
  const parseProduct = JSON.stringify(product);
  localStorage.setItem("productData", parseProduct);
};

export const getProduct = () => {
  return localStorage.getItem("productData");
};

export const removeProduct = () => {
  localStorage.removeItem("productData");
};
