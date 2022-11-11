import { fetchWithoutToken, getWithoutToken } from '../../helpers/fetch';

export const getProductByCart = async (clientId) => {
	const data = await getWithoutToken(`carrito/${clientId}`);
	console.log('data', data);

	return data;
};
