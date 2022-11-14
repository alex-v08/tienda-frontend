import { Message } from '../../components';
import { fetchWithoutToken } from '../../helpers/fetch';

export const deleteProduct = async (clientId, productId) => {
	try {
		const data = await fetchWithoutToken(
			`carrito/${clientId}/${productId}`,
			'DELETE',
			{
				clientId: clientId,
				productId: +productId,
			}
		);

		return data;
	} catch (error) {
		Message('Error al eliminar el producto del carrito', 'warn');
	}
};
