import { fetchWithoutToken, getWithoutToken } from '../../helpers/fetch';

export const getProductByCart = async (clientId) => {
	try {
		const data = await getWithoutToken(`carrito/${clientId}`);
		return data;
	} catch (error) {
		return null;
	}
};
