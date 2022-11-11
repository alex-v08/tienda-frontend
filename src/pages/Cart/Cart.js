import { Empty } from '../../components';
import { Item } from './components/Item/Item';

import { getProductByCart } from '../../services/carrito';
import './styles/cart.css';
import { generateOrder } from '../../services/orden/generateOrder';

export const Cart = async () => {
	let carrito = await getProductByCart(1);

	let view = `<section class="items" id="items">
                    <h1>Carrito de compras</h1>                    
                </section>
                <section class="total">
                    <h1 class="title"> T0TAL </h1>               
                    <strong>${!!carrito ? carrito.total : 0}</strong>
                    <button id="btnComprar"> C0MPRAR </button>                    
                </section>            
            `;

	const divElement = document.createElement('div');
	divElement.id = 'cart';
	divElement.innerHTML = view;

	const itemsElements = divElement.querySelector('#items');
	if (!carrito || carrito.productos === 0) {
		itemsElements.innerHTML = Empty();
	} else {
		carrito.productos.forEach((element) => {
			itemsElements.appendChild(Item(element));
		});
	}

	const btnComprar = divElement.querySelector('#btnComprar');
	btnComprar.addEventListener('click', async () => {
		let data = await generateOrder(1);
		alert('Gracias por su compra!' + data.ordenId);
		window.location.href = '/cart';
	});

	return divElement;
};
