import { Item } from './components/Item/Item';
import { getProductos } from './services/cart.services';
import './styles/cart.css';

export const Cart = async() => {

    let productos = await getProductos();

    return `<div id='cart'>
                <div class="items">
                    ${productos.map((producto) => Item(producto)).join(" ")}    
                </div>
            </div>`;     
} 