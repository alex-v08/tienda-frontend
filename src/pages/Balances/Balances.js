import { Cards } from "./components/Cards/Cards";
import { Venta } from "./components/Venta/Venta";
import { getBalance } from "./services/getBalance";
import "./styles/balances.css";

export const Balances = async () => {
  const balances = await getBalance();

  return `<div class='balances'>
                <h1>Ventas del día</h1>
				<section class="balance-cards">   
                    ${Cards(balances)}                             
                </section>
                <section class="balance-detalle">      
                    ${balances.ventas.map(venta => Venta(venta)).join("")}
                </section>
			</div>`;
};
