import { AuthLayout, PublicLayout } from "../layouts";
import { Home, Login, NotFound, ViewTicket, Tickets, Unauthorized, Producto } from "../pages";

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
];

export const routeNotFound = {
  path: "/notfound",
  page: () => PublicLayout(NotFound),
};
