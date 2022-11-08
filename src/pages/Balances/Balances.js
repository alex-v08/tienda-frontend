import { getBalance } from './services/getBalance';
import './styles/balances.css';

export const Balances = async () => {

    const balances = await getBalance();

	return `<div class='balances'>
                <h1>Ventas del día</h1>
				<section class="balance-cards">                      
                    <div class="balance-card">                  
                        <h2>${balances.ventas.length} ventas</h2>
                    </div>   
                    <div class="balance-card">                  
                        <h2>${20} juegos</h2>
                    </div> 
                    <div class="balance-card">                  
                        <h2>$ ${balances.recaudacion}</h2>
                    </div>               
                </section>
                <section class="balance-detalle">      
                    <div class="venta">                        
                        <div class="productos">  
                            <div class="header">                   
                                <div>Juego</div>
                                <div>Precio</div>
                                <div>Cantidad</div>
                            </div>
                            <div class="producto">                   
                                <div>producto 1</div>
                                <div>20$</div>
                                <div>4</div>
                            </div>
                            <div class="producto">                   
                                <div>producto 2</div>
                                <div>30$</div>
                                <div>2</div>
                            </div>
                            <div class="footer">     
                                <div></div>                 
                                <div>TOTAL</div>                               
                                <div>10000</div>
                            </div>
                        </div>
                    </div>
                    <div class="venta">
                        <div class="productos">      
                            <div class="header">                   
                                <div>Juego</div>
                                <div>Precio</div>
                                <div>Cantidad</div>
                            </div>                    
                            <div class="producto">                   
                                <div>producto 1</div>
                                <div>20$</div>
                                <div>4</div>
                            </div>
                            <div class="producto">                   
                                <div>producto 2</div>
                                <div>30$</div>
                                <div>2</div>
                            </div>
                            <div class="footer">     
                            <div></div>                 
                            <div>TOTAL</div>                               
                            <div>10000</div>
                        </div>
                        </div>
                    </div>             
                </section>
			</div>`;
};


