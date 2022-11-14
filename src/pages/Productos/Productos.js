import { useProductos } from './hook/useProductos';
import './styles/productos.css';

export const Productos = async () => {
	let view = `<section class="header">
                    <h1> Productos </h1>  
                    <div class="tools">    
                        <select name="order" id="slOrder">
                            <option value="false">↓ Más caros</option>   
                            <option value="true">↑ Más baratos</option>       
                        </select>                    
                        <div class="filter" > 
                            <input type="text" placeholder="buscar..." id="btnInput"/>                    
                            <button id="btnSearch">&#x1F50E;&#xFE0E;</button>
                        </div>                   
                    </div>  
                </section>
                <section class="productos" id="productos">                    
                </section>    
             `;

	return useProductos(view);
};
