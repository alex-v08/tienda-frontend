import { deleteProduct, updateProduct } from '../../../../services/carrito';
import './styles/item.css';

export const Item = (item) => {
	let view = `<div class='item'>
                <img src="${item.image}" title="${item.nombre}" />
                <div class="info">
                    <h2> ${item.nombre} </h2> 
                    <p class="overflow-ellipsis"> ${item.descripcion} </p>  
                </div>
                <div class="tools">
                    <input type="number" value="${item.cantidad}" id="inpAmount" />
                    <strong>$ ${item.precio}</strong>
                </div>    
                <button id="btnClose" class="close"> x </button>           
            </div>`;

	const divElement = document.createElement('div');
	divElement.classList = 'home';
	divElement.innerHTML = view;

	const btnClose = divElement.querySelector('#btnClose');
	btnClose.addEventListener('click', () => {
		deleteProduct(1, item.productoId);
		window.location.href = '/cart';
	});

	const inpAmount = divElement.querySelector('#inpAmount');
	inpAmount.addEventListener('change', (event) => {
		updateProduct(1, item.productoId, +event.target.value);
		window.location.href = '/cart';
	});

	return divElement;
};
