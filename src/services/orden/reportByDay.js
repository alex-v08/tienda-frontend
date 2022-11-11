//https://localhost:7133/api/orden?from=2021-11-10&to=2022-11-12

import { getWithoutToken } from '../../helpers/fetch';

export const reportByDay = async (from, to) => {
	const data = await getWithoutToken(`orden?from=${from}&to=${to}`, 'GET');

	return data;
};
