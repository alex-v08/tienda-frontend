import { Message } from '../../components';
import { fetchWithoutToken } from '../../helpers/fetch';

export const addProduct = async (productId, amount) => {
	try {
		const data = await fetchWithoutToken('carrito', 'POST', {
			clientId: 1,
			productId: +productId,
			amount: amount,
		});
		Message('Producto agregado al carrito con éxito!', 'info');

		return data;
	} catch (error) {
		Message('Error al agregar el producto al carrito', 'warn');
	}
};
