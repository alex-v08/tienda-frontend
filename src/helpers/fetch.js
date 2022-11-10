// const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_API_BASE_URL = 'https://localhost:7133/api';

export const fetchWithoutToken = async (endpoint, method, request) => {
	try {
		const response = await fetch(`${VITE_API_BASE_URL}/${endpoint}`, {
			method: method,
			body: JSON.stringify(request),
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
		throw new Error(error.message);
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
		throw new Error(error.message);
	}
};
