import './styles/card.css';

export const Card = (card) => {
	return `<div class="card">        
            <figure>
                <a href="/producto/${card.productoId}" >
                    <img src="${card.image}" title="${card.nombre}" alt="${card.nombre}" />
                </a>
            </figure>  
            <footer>
                <h2> ${card.nombre} </h2>
                <strong>$ ${card.precio}</strong>
            </footer>           
		  </div>`;
};
