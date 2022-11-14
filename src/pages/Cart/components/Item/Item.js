import { useItem } from './hook/useItem';
import './styles/item.css';

export const Item = async (item) => {
	let view = `<div class='item'>
                <img src="${item.image}" title="${item.nombre}" alt="producto"/>
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

	return useItem(view, item);
};
