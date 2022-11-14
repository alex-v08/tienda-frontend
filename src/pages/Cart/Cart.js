import { Empty, Message } from '../../components';
import { Item } from './components/Item/Item';
import { useCart } from './hook/useCart';

import './styles/cart.css';

export const Cart = async () => {
	let view = `<section class="items" id="items">
                    <h1>Carrito de compras</h1>                    
                </section>
                <section class="total">
                    <h1 class="title"> T0TAL </h1>               
                    <strong id="cartTotal"></strong>
                    <button id="btnComprar"> C0MPRAR </button>                    
                </section> 
            `;

	return useCart(view);
};
