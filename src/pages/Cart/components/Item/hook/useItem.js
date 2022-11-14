import { user } from '../../../../../Mock/user';
import { navigateTo } from '../../../../../router/router';
import { deleteProduct, updateProduct } from '../../../../../services/carrito';

export const useItem = async (view, item) => {
	const divElement = document.createElement('div');
	divElement.classList = 'home';
	divElement.innerHTML = view;

	const btnClose = divElement.querySelector('#btnClose');
	btnClose.addEventListener('click', async () => {
		await deleteProduct(user.id, item.productoId);
		navigateTo('/cart');
	});

	const inpAmount = divElement.querySelector('#inpAmount');
	inpAmount.addEventListener('change', async (event) => {
		await updateProduct(user.id, item.productoId, +event.target.value);
		navigateTo('/cart');
	});

	return divElement;
};
