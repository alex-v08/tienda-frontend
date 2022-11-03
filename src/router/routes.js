import { AuthLayout, PublicLayout } from "../layouts";
import { Home, Login, NotFound, ViewTicket, Tickets, Unauthorized } from "../pages";

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
    page: (params) => AuthLayout(() => ViewTicket(params)),
  },
];

export const routeNotFound = {
  path: "/notfound",
  page: () => PublicLayout(NotFound),
};
