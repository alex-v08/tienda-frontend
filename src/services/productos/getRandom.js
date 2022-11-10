import { getWithoutToken } from '../../helpers/fetch';

export const getRandom = async () => {
	try {
		const data = await getWithoutToken('productos');
		return data.sort(() => 0.5 - Math.random()).slice(0, 4);
	} catch (error) {
		console.error('error', error);
	}
};
