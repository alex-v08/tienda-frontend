//https://localhost:7133/api/orden/:clientId

import { fetchWithoutToken } from '../../helpers/fetch';

export const generateOrder = async (clientId) => {
	const data = await fetchWithoutToken(`orden/${clientId}`, 'POST');

	return data;
};
