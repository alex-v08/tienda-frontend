import { Cards } from '../../../components';
import { addProduct } from '../../../services/carrito';
import { getRandom } from '../../../services/productos';

export const useProducto = async (view, params) => {
	let productos = await getRandom();

	const divElement = document.createElement('div');
	divElement.id = 'producto';
	divElement.innerHTML = view;

	const divProductos = divElement.querySelector('#otros');
	divProductos.appendChild(Cards(productos));

	const btn = divElement.querySelector('#btnAddToCart');
	btn.addEventListener('click', async () => {
		await addProduct(params.id, 1);
	});

	return divElement;
};
