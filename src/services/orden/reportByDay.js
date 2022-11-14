//https://localhost:7133/api/orden?from=2021-11-10&to=2022-11-12

import { Message } from '../../components';
import { getWithoutToken } from '../../helpers/fetch';

export const reportByDay = async (from, to) => {
	try {
		const data = await getWithoutToken(
			`orden?from=${from}&to=${to}`,
			'GET'
		);
		return data;
	} catch (error) {
		Message('Error al obtener el reporte diario', 'warn');
	}
};
