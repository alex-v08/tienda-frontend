import { AuthLayout, PublicLayout } from "../layouts";
import {
  Home,
  Login,
  NotFound,
  Unauthorized,
  Producto,
  Cart,
  Productos,
} from "../pages";

export const routes = [
  {
    path: "/",
    page: () => AuthLayout(Home),
  },
  {
    path: "/login",
    page: () => PublicLayout(Login),
  },
  {
    path: "/unauthorized",
    page: () => PublicLayout(Unauthorized),
  },
  {
    path: "/producto/:id",
    page: (params) => AuthLayout(async () => await Producto(params)),
  },
  {
    path: "/cart",
    page: () => AuthLayout(Cart),
  },
  {
    path: "/productos",
    page: () => AuthLayout(Productos),
  },
];

export const routeNotFound = {
  path: "/notfound",
  page: () => PublicLayout(NotFound),
};
