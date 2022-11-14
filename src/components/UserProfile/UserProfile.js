import cart from '../../assets/cart.svg';
import avatar from '../../../public/random.svg';
import { user } from '../../Mock/user';

import './styles/userProfile.css';

export const UserProfile = () => {
	return `<div class="userProfile">                   
                <div class="info"> 
                    <span>${user.nombre} ${user.apellido} </span>
                    <span>${user.rol.nombre}</span>
                </div>
                <img src="${avatar}" alt="userPick" title="userPick"/>	
                <button id="cart">
                    <img class="cart" src="${cart}" alt="carrito de compras" />
                </button>
            </div>`;
};
