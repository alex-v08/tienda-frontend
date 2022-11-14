import { Empty } from '../../../components';
import { user } from '../../../Mock/user';
import { getProductByCart } from '../../../services/carrito';
import { generateOrder } from '../../../services/orden';
import { Item } from '../components/Item/Item';

export const useCart = async (view) => {
	let carrito = await getProductByCart(user.id);

	const divElement = document.createElement('div');
	divElement.id = 'cart';
	divElement.innerHTML = view;

	const total = divElement.querySelector('#cartTotal');
	total.innerHTML = !!carrito ? carrito.total : 0;

	const itemsElements = divElement.querySelector('#items');
	if (!carrito || carrito.productos.length === 0) {
		itemsElements.innerHTML = Empty();
	} else {
		carrito.productos.forEach(async (element) => {
			itemsElements.appendChild(await Item(element));
		});
	}

	const btnComprar = divElement.querySelector('#btnComprar');
	btnComprar.addEventListener('click', async () => {
		await generateOrder(user.id);
	});

	return divElement;
};
