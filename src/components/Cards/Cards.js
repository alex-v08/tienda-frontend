import { Card } from '../Card/Card';
import { Empty } from '../Empty/Empty';
import './styles/cards.css';

export const Cards = (cards) => {
	let view = Empty();

	const divElement = document.createElement('div');
	divElement.id = 'cards';

	if (!!cards && cards.length > 0)
		view = cards.forEach((card) => {
			divElement.appendChild(Card(card));
		});

	return divElement;
};
