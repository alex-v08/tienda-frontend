import { Cards } from '../../../components';
import { getRandom } from '../../../services/productos';

export const useHome = async (view) => {
	const productos = await getRandom();
	const divElement = document.createElement('div');
	divElement.classList = 'home';
	divElement.innerHTML = view;

	const divProductos = divElement.querySelector('#topProductos');
	divProductos.appendChild(Cards(productos));

	return divElement;
};
