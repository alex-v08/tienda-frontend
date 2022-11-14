import { Message } from '../../components';
import { getWithoutToken } from '../../helpers/fetch';

export const getByFilter = async (name, sort = 'false') => {
	try {
		let filter = `name=${name}&sort=${sort}`;

		const data = await getWithoutToken(`productos?${filter}`);
		return data;
	} catch (error) {
		Message('Error al obtener los productos', 'warn');
	}
};
