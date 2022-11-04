import { Item } from './components/Item/Item';
import { getProductos } from './services/cart.services';
import './styles/cart.css';

export const Cart = async() => {

    let productos = await getProductos();

    return `<div id='cart'>
                <div class="items">
                    ${productos.map((producto) => Item(producto)).join(" ")}    
                </div>
                <div class="total">
                    <strong>$ 480</strong>
                    <h1> PAGAR </h1>

                </div>            
            </div>`;     
} 