export const setStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key) => {
	let value = localStorage.getItem(key);
	return JSON.parse(value);
};
