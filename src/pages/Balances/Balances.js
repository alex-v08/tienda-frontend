import { useBalance } from './hook/useBalance';

import './styles/balances.css';

export const Balances = async () => {
	let view = `<h1>Ventas del día</h1>
				<section class="balance-cards" id="balanceCards">   
                </section>
                <section class="balance-detalle" id="balanceDetalle">      
                </section>
			`;

	return useBalance(view);
};
