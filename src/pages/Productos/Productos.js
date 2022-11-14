import { Cards } from '../../components';
import { activateLink } from '../../init';
import { getAll, getByFilter } from '../../services/productos';
import './styles/productos.css';

export const Productos = async () => {
	let productos = await getAll();

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

	const divElement = document.createElement('div');
	divElement.classList = 'productos';
	divElement.innerHTML = view;

	const divProductos = divElement.querySelector('#productos');
	divProductos.appendChild(Cards(productos));

	const slOrder = divElement.querySelector('#slOrder');
	slOrder.addEventListener('change', async (event) => {
		let productosFiltrados = await getByFilter('', event.target.value);

		const divProductos = divElement.querySelector('#productos');
		divProductos.replaceChildren(Cards(productosFiltrados));
	});

	const btnSearch = divElement.querySelector('#btnSearch');
	btnSearch.addEventListener('click', async () => {
		const btnInput = divElement.querySelector('#btnInput');
		const slOrder = divElement.querySelector('#slOrder');

		let productosFiltrados = await getByFilter(
			btnInput.value,
			slOrder.value
		);

		const divProductos = divElement.querySelector('#productos');
		divProductos.replaceChildren(Cards(productosFiltrados));
	});

	return divElement;
};
