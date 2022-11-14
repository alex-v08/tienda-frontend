import { navigateTo } from '../../../router/router';

export const useCard = (view, card) => {
	const divElement = document.createElement('div');
	divElement.classList = 'card';
	divElement.innerHTML = view;

	let button = divElement.querySelector('button');
	button.addEventListener('click', () => {
		navigateTo(`/producto/${card.productoId}`);
	});

	return divElement;
};
