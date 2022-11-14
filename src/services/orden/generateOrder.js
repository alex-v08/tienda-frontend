//https://localhost:7133/api/orden/:clientId

import { Message } from '../../components';
import { fetchWithoutToken } from '../../helpers/fetch';

export const generateOrder = async (clientId) => {
	try {
		await fetchWithoutToken(`orden/${clientId}`, 'POST');
		Message('Compra realizada con éxito!', 'info');
		window.location.href = '/cart';
	} catch (error) {
		Message(
			'Error al realizar la compra, vuelva a intentarlo luego',
			'warn'
		);
	}
};
