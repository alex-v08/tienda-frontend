import './styles/item.css';

export const Item = (item) => {
    return `<div class='item'>
                <img src="${item.Image}" title="${item.Nombre}" />
                <div class="info">
                    <h2> ${item.Nombre} </h2>                    
                </div>
                <div class="tools"></div>

                
            </div>`;     
} 