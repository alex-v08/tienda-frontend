import { getWithoutToken } from '../../helpers/fetch';

export const getAll = async () => {
	try {
		const data = await getWithoutToken('productos?sort=false');
		return data;
	} catch (error) {
		console.error('error', error);
	}
};
