import { Empty } from '../../../components';
import { tomorrow, yerterday } from '../../../helpers/dates';
import { reportByDay } from '../../../services/orden';
import { Cards } from '../components/Cards/Cards';
import { Venta } from '../components/Venta/Venta';

export const useBalance = async (view) => {
	const balances = await reportByDay(yerterday(), tomorrow());

	const divElement = document.createElement('div');
	divElement.classList = 'balances';
	divElement.innerHTML = view;

	if (!balances) {
		const divBalanceDetalle = divElement.querySelector('#balanceDetalle');
		divBalanceDetalle.innerHTML = Empty();
		return divElement;
	}

	const divCards = divElement.querySelector('#balanceCards');
	divCards.innerHTML = Cards(balances);

	const divBalanceDetalle = divElement.querySelector('#balanceDetalle');
	divBalanceDetalle.innerHTML = balances.ventas
		.map((venta) => Venta(venta))
		.join('');

	return divElement;
};
