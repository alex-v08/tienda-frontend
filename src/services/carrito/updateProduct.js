import { fetchWithoutToken } from '../../helpers/fetch';

export const updateProduct = async (clientId, productId, amount) => {
	try {
		const data = await fetchWithoutToken('carrito', 'PUT', {
			clientId: clientId,
			productId: +productId,
			amount: amount,
		});

		return data;
	} catch (error) {
		Message('Error al actualizar el producto del carrito', 'warn');
	}
};
