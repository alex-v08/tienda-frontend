import { Item } from './components/Item/Item';
import { getProductos } from './services/cart.services';
import './styles/cart.css';


export const Cart = async() => {

    let productos = await getProductos();

    return `<div id='cart'>
                <section class="items">
                    <h1>Carrito de compras </h1>
                    ${productos.map((producto) => Item(producto)).join(" ")}    
                </section>
                <section class="total">
                    <h1 class="title"> T0TAL </h1>               
                    <strong>$ 480</strong>
                    <button> C0MPRAR </button>                    
                </section>            
            </div>`;     
} 