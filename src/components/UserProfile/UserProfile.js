import './styles/userProfile.css';
import cart from "../../assets/cart.svg"
import avatar from "../../../public/random.svg"



export const UserProfile = () => {
    return `<div class="userProfile">                   
                <div class="info"> 
                    <span> Leonardo Duca </span>
                    <span>Administrador</span>
                </div>
                <img src="${avatar}" alt="userPick" title="userPick"/>	
                <a href="/cart">
                    <img class="cart" src="${cart}" />
                </a>
            </div>`;     
} 