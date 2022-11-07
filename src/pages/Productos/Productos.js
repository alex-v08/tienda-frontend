import { Cards } from '../../components';
import { getProductos } from './services/productos.services';
import './styles/productos.css';

export const Productos = async () => {
    
    let productos = await getProductos();

    return `<div class='productos'>
                <section class="header">
                    <h1> Productos </h1>  
                    <div class="tools">    
                        <select name="order">
                            <option value="1">Ordenar por nombre</option>   
                            <option value="2">Ordenar por precio</option>       
                        </select>                    
                        <div class="filter"> 
                            <input type="text" placeholder="buscar..."/>                    
                            <span>&#x1F50E;&#xFE0E;</span>
                        </div>                   
                    </div>  
                </section>
                <section class="productos">
                    ${Cards(productos)}
                </section>    
             </div>`;     
} 