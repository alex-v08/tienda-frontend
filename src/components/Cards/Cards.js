import { Card } from '../Card/Card';
import { Empty } from '../Empty/Empty';
import './styles/cards.css';

export const Cards = (cards) => {
	if (!cards || cards.length === 0) return Empty();

	return `<div id="cards">${cards.map((card) => Card(card)).join(' ')}</div>`;
};
