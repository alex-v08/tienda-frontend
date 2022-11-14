import { navigateTo } from '../../../router/router';

export const useAuthLayout = async (view, children) => {
	const divElement = document.createElement('div');
	divElement.classList = 'authLayout';
	divElement.innerHTML = view;

	const main = divElement.querySelector('#children');
	main.appendChild(await children());

	const nav = divElement.querySelectorAll('.navbar button');
	const cart = divElement.querySelector('#cart');

	nav.forEach((el) => {
		el.addEventListener('click', (e) => {
			const { textContent } = e.target;
			navigateTo(`/${textContent.trim()}`);
		});
	});

	cart.addEventListener('click', () => {
		navigateTo(`/cart`);
	});

	return divElement;
};
