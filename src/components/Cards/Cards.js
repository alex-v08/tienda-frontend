import { Card } from '../Card/Card';
import { Empty } from '../Empty/Empty';
import './styles/cards.css';

export const Cards = (cards) => {
	const divElement = document.createElement('div');
	divElement.id = 'cards';

	if (!!cards && cards.length > 0)
		cards.forEach((card) => {
			divElement.appendChild(Card(card));
		});
	else divElement.innerHTML = Empty();

	return divElement;
};
