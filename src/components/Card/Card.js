import "./styles/card.css";

export const Card = (card) => {
  return `<div class="card">        
            <figure>
                <a href="/producto/${card.id}" >
                    <img src="${card.Image}" title="${card.Nombre}" />
                </a>
            </figure>  
            <footer>
                <h2> ${card.Nombre} </h2>
                <strong>$ ${card.Precio}</strong>
            </footer>           
		  </div>`;
};
