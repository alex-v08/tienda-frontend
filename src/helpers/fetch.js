const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchWithoutToken = async (endpoint, method, request = null) => {
	try {
		let init = {
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
		};

		if (!!request) init.body = JSON.stringify(request);

		const response = await fetch(`${VITE_API_BASE_URL}/${endpoint}`, init);

		if (!response.ok) {
			const data = await response.json();

			if (!!data.title && !!data.message)
				throw new Error(`${data.title}, ${data.message}`);
			else
				throw new Error(
					`Error no especificado, consulte al administrador.`
				);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

export const getWithoutToken = async (endpoint) => {
	try {
		const response = await fetch(`${VITE_API_BASE_URL}/${endpoint}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
};
