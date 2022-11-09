import { Cards } from '../../components';
import { getRandom, getById } from '../../services/productos';

import cart from "../../assets/cartgreen.svg"
import './styles/producto.css';

export const Producto = async (params) => {
    let producto = await getById(params.id);    
    let productos = await getRandom();    

    let view = `<div id='producto'>
                     <article>                        
                        <figure>
                            <img class="flyer" src="${producto.image}" title="${producto.nombre}" />  
                        </figure>
                       <h2> ${producto.nombre} </h2>
                       <p> ${producto.descripcion} </p>
                       <div class="precio">$${producto.precio}</div>
                       <footer>
                            <div class="marca">${producto.marca}</div>
                            <div class="cart">
                                <span>+</span>
                                <img src="${cart}" title="add to carrito" />
                            </div>
                       </footer>                       
                    </article>
                    <section class="otros">                        
                        ${Cards(productos)}
                    </section>
                </div>`;     
                
    return view;     
} 