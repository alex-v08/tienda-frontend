import { getWithoutToken } from '../../helpers/fetch';

export const getAll = async () => {
	try {
		const data = await getWithoutToken('productos');
		return data;
	} catch (error) {
		console.error('error', error);
	}
};
