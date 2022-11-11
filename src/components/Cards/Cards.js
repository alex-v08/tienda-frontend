import { Card } from '../Card/Card';
import { Empty } from '../Empty/Empty';
import './styles/cards.css';

export const Cards = (cards) => {
	let view = Empty();

	if (!!cards && cards.length > 0)
		view = cards.map((card) => Card(card)).join(' ');

	const divElement = document.createElement('div');
	divElement.id = 'cards';
	divElement.innerHTML = view;

	return divElement;
};
