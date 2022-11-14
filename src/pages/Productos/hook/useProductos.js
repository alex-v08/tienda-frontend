import { Cards, Empty } from '../../../components';
import { getAll, getByFilter } from '../../../services/productos';

export const useProductos = async (view) => {
	let productos = await getAll();

	const divElement = document.createElement('div');
	divElement.classList = 'productos';
	divElement.innerHTML = view;

	const divProductos = divElement.querySelector('#productos');
	divProductos.appendChild(Cards(productos));

	const slOrder = divElement.querySelector('#slOrder');
	slOrder.addEventListener('change', async (event) => {
		let productosFiltrados = await getByFilter('', event.target.value);

		const divProductos = divElement.querySelector('#productos');
		divProductos.replaceChildren(Cards(productosFiltrados));
	});

	const btnSearch = divElement.querySelector('#btnSearch');
	btnSearch.addEventListener('click', async () => {
		const btnInput = divElement.querySelector('#btnInput');
		const slOrder = divElement.querySelector('#slOrder');

		let productosFiltrados = await getByFilter(
			btnInput.value,
			slOrder.value
		);

		const divProductos = divElement.querySelector('#productos');

		productosFiltrados.length === 0
			? (divProductos.innerHTML = Empty())
			: divProductos.replaceChildren(Cards(productosFiltrados));
	});

	const btnInput = divElement.querySelector('#btnInput');
	btnInput.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			document.getElementById('btnSearch').click();
		}
	});

	return divElement;
};
