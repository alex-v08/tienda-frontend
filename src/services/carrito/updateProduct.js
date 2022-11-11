import { fetchWithoutToken } from '../../helpers/fetch';

export const updateProduct = async (clientId, productId, amount) => {
	const data = await fetchWithoutToken('carrito', 'PUT', {
		clientId: clientId,
		productId: +productId,
		amount: amount,
	});

	return data;
};
