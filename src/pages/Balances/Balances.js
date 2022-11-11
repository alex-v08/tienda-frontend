import { reportByDay } from '../../services/orden';
import { Cards } from './components/Cards/Cards';
import { Venta } from './components/Venta/Venta';

import './styles/balances.css';

export const Balances = async () => {
	const balances = await reportByDay('2022-11-10', '2022-11-12');

	let view = `<h1>Ventas del día</h1>
				<section class="balance-cards">   
                    ${Cards(balances)}                             
                </section>
                <section class="balance-detalle">      
                    ${balances.ventas.map((venta) => Venta(venta)).join('')}
                </section>
			`;

	const divElement = document.createElement('div');
	divElement.classList = 'balances';
	divElement.innerHTML = view;

	return divElement;
};
