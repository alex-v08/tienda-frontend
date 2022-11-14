import { navigateTo } from '../../router/router';
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

	const divElement = document.createElement('div');
	divElement.classList = 'card';
	divElement.innerHTML = view;

	let button = divElement.querySelector('button');
	button.addEventListener('click', () => {
		navigateTo(`/producto/${card.productoId}`);
	});

	return divElement;
};
