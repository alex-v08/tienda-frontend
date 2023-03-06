import { getById } from '../../services/productos';
import { useProducto } from './hook/useProducto';

import cart from '../../assets/cartgreen.svg';
import './styles/producto.css';

export const Producto = async (params) => {
	let producto = await getById(params.id);

	let view = `<article>                                             
                    <figure>
                        <img class="flyer" src="${producto.image}" title="${producto.nombre}" alt="imagen de ${producto.nombre}"/>  
                    </figure>
                    <h2> ${producto.nombre} </h2>
                    <p> ${producto.descripcion} </p>
                    <div class="precio">$${producto.precio}</div>
                    <footer>
                        <div class="marca">${producto.marca}</div>
                        <button id="btnAddToCart" class="cart">
                            <span>+</span>
                            <img src="${cart}" title="agregar al carrito 2" alt="agregar al carrito"/>
                        </button>
                    </footer>                       
                </article>
                <aside class="otros" id="otros">   
                <h3>Juegos relacionados</h3>                     
                </aside>
              `;

	return useProducto(view, params);
};
