import { getProducto } from './services/productoServices';
import './styles/producto.css';
import cart from "../../assets/cartgreen.svg"


export const Producto = async (params) => {
    let producto = await getProducto(params.id);    

    let view = `<div id='producto'>
                     <article>                        
                        <figure>
                            <img src="${producto.Image}" title="${producto.Nombre}" />  
                        </figure>
                       <h2> ${producto.Nombre} </h2>
                       <p> ${producto.Descripcion} </p>
                       <div class="precio">$${producto.Precio}</div>
                       <footer>
                            <div class=""marca>${producto.Marca}</div>
                            <div class="cart">
                                <span>+</span>
                                <img src="${cart}" title="add to carrito" />
                            </div>
                       </footer>
                       
                    </article>
                </div>`;     
                
    return view;     
} 