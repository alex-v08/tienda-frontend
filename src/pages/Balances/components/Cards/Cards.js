import './styles/cards.css';

export const Cards = (balances) => {
	return ` <div class="balance-card">                  
                <h2>1 cliente</h2>
            </div>                    
            <div class="balance-card">                  
                <h2>${balances.ventas.length} ventas</h2>
            </div>   
            <div class="balance-card">                  
                <h2>${balances.totalItems} juegos</h2>
            </div> 
            <div class="balance-card">                  
                <h2>$ ${balances.recaudacion}</h2>
            </div>`;
};
