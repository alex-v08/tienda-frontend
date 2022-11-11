import './styles/venta.css';

export const Venta = (venta) => {
	return `<div class="venta"> 
            <div class="info">                 
                <h3>Fecha: ${venta.fecha} </h2>
            </div>
            <div class="productos">  
                <div class="header">                   
                    <div>Juego</div>
                    <div>Precio</div>
                    <div>Cantidad</div>
                </div>
                ${venta.productos
					.map(
						(
							producto
						) => `<div class="producto" key="${producto.productoId}">                   
                                    <div>${producto.nombre}</div>
                                    <div>${producto.precio}</div>
                                    <div>${producto.cantidad}</div>
                                </div>`
					)
					.join('')}
                <div class="footer">     
                    <div></div>                 
                    <div>TOTAL</div>                               
                    <div>${venta.total}</div>
                </div>
               
            </div>
        </div> `;
};
