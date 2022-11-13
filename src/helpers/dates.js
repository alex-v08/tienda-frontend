export const today = () => {
	return new Date().toISOString().slice(0, 10);
};

export const yerterday = () => {
	return addDays(new Date(), -1).toISOString().slice(0, 10);
};

export const tomorrow = () => {
	return addDays(new Date(), 1).toISOString().slice(0, 10);
};

function addDays(date, days) {
	date.setDate(date.getDate() + days);
	return date;
}
