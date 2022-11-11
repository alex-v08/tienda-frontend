import { getProductByCart } from '../../services/carrito';
import { Item } from './components/Item/Item';
import './styles/cart.css';

export const Cart = async () => {
	let carrito = await getProductByCart(1);

	let view = `<section class="items" id="items">
                    <h1>Carrito de compras </h1>                    
                </section>
                <section class="total">
                    <h1 class="title"> T0TAL </h1>               
                    <strong>${carrito.total}</strong>
                    <button> C0MPRAR </button>                    
                </section>            
            `;

	const divElement = document.createElement('div');
	divElement.id = 'cart';
	divElement.innerHTML = view;

	const itemsElements = divElement.querySelector('#items');
	carrito.productos.forEach((element) => {
		itemsElements.appendChild(Item(element));
	});

	return divElement;
};
