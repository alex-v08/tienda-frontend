import { fetchWithoutToken } from '../../helpers/fetch';

export const deleteProduct = async (clientId, productId) => {
	const data = await fetchWithoutToken(
		`carrito/${clientId}/${productId}`,
		'DELETE',
		{
			clientId: clientId,
			productId: +productId,
		}
	);

	return data;
};
