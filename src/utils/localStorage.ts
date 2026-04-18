import type { IUser } from "../types/IUser";
import type { Producto } from "../types/Product";

export const saveUser = (user: IUser) => {
  const parseUser = JSON.stringify(user);
  localStorage.setItem("userData", parseUser);
};
export const getUSer = () => {
  return localStorage.getItem("userData");
};
export const removeUser = () => {
  localStorage.removeItem("userData");
};

export const saveProduct = (product: Producto[]) => {
  const parseProduct = JSON.stringify(product);
  localStorage.setItem("productData", parseProduct);
};

export const getProduct = () => {
  return localStorage.getItem("productData");
};

export const removeProduct = () => {
  localStorage.removeItem("productData");
};