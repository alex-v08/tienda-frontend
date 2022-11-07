import './styles/item.css';

export const Item = (item) => {
    return `<div class='item'>
                <img src="${item.Image}" title="${item.Nombre}" />
                <div class="info">
                    <h2> ${item.Nombre} </h2> 
                    <p class="overflow-ellipsis"> ${item.Descripcion} </p>  
                </div>
                <div class="tools">
                    <input type="number" value="${item.Cantidad}" />
                    <strong>$ ${item.Precio}</strong>
                </div>    
                <button class="close"> x </button>           
            </div>`;     
} 