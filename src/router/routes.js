import { AuthLayout, PublicLayout } from "../layouts";
import { Home, Login, NotFound, Unauthorized, Producto, Cart } from "../pages";

export const routes = [
  {
    path: "/",
    page:  () => AuthLayout(Home),
  },
  {
    path: "/login",
    page:  () =>  PublicLayout(Login),
  },
  {
    path: "/unauthorized",
    page:  () =>  PublicLayout(Unauthorized),
  },
  {
    path: "/producto/:id",
    page: (params) => AuthLayout(async () => await Producto(params)),
  },
  {
    path: "/cart",
    page:  () => AuthLayout(Cart),    
  },
];

export const routeNotFound = {
  path: "/notfound",
  page: () => PublicLayout(NotFound),
};
