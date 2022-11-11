import { fetchWithoutToken } from '../../helpers/fetch';

export const updateProduct = async (productId, amount) => {
	const data = await fetchWithoutToken('carrito', 'PUT', {
		clientId: 1,
		productId: +productId,
		amount: amount,
	});

	return data;
};
