import { Cards } from '../../components';
import { getRandom, getById } from '../../services/productos';
import { addProduct } from '../../services/carrito';

import cart from "../../assets/cartgreen.svg"
import './styles/producto.css';


export const Producto = async (params) => {
    let producto = await getById(params.id);    
    let productos = await getRandom();    

    let view = `<article>                        
                    <figure>
                        <img class="flyer" src="${producto.image}" title="${producto.nombre}" />  
                    </figure>
                    <h2> ${producto.nombre} </h2>
                    <p> ${producto.descripcion} </p>
                    <div class="precio">$${producto.precio}</div>
                    <footer>
                        <div class="marca">${producto.marca}</div>
                        <button id="btnAddToCart" class="cart">
                            <span>+</span>
                            <img src="${cart}" title="add to carrito" />
                        </button>
                    </footer>                       
                </article>
                <section class="otros">                        
                    ${Cards(productos)}
                </section>
              `;     


        const divElement = document.createElement("div");
        divElement.id = "producto";
        divElement.innerHTML = view;

        const btn = divElement.querySelector("#btnAddToCart");
        btn.addEventListener("click", () => addProduct(params.id, 1));

    return divElement;     
} 