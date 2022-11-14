import { useCard } from './hook/useCard';
import './styles/card.css';

export const Card = (card) => {
	let view = `<figure>
                <button>
                    <img src="${card.image}" title="${card.nombre}" alt="imagen de ${card.nombre}" />
                </button>
                </figure>  
                <footer>
                    <h2> ${card.nombre} </h2>
                    <strong>$ ${card.precio}</strong>
                </footer>`;

	return useCard(view, card);
};
