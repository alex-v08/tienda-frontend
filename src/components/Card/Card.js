import "./styles/card.css";

export const Card = (card) => {
  return `<div class="card">        
            <figure>
                <img src="${card.Image}" title="${card.Nombre}" />
            </figure>  
            <footer>
                <h2> ${card.Nombre} </h2>
                <strong>$ ${card.Precio}</strong>
            </footer>           
		  </div>`;
};
