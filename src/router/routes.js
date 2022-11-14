import { AuthLayout, PublicLayout } from '../layouts';
import {
	Home,
	NotFound,
	Unauthorized,
	Producto,
	Cart,
	Productos,
	Balances,
} from '../pages';

export const routes = [
	{
		path: '/',
		page: () => AuthLayout(async () => await Home()),
	},
	{
		path: '/inicio',
		page: () => AuthLayout(async () => await Home()),
	},
	{
		path: '/unauthorized',
		page: () => PublicLayout(Unauthorized),
	},
	{
		path: '/producto/:id',
		page: (params) => AuthLayout(async () => await Producto(params)),
	},
	{
		path: '/cart',
		page: () => AuthLayout(Cart),
	},
	{
		path: '/productos',
		page: () => AuthLayout(Productos),
	},
	{
		path: '/balances',
		page: () => AuthLayout(Balances),
	},
];

export const routeNotFound = {
	path: '/notfound',
	page: () => PublicLayout(NotFound),
};
