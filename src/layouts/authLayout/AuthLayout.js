import "./styles/authLayout.css";
import cart from "../../assets/cart.svg"
import 'victormono'

export const AuthLayout = (children) => {
  return `<div class="authLayout">
            <header>
                <div class="brand" id="">
                <a href="/">
                  <span class="title">game💀ver</span>
                  <strong class="logo">💀</strong>     
                </a>             
                </div>	  
                <div class="userProfile">                   
                    <div class="info"> 
                        <span> Leonardo Duca </span>
                        <span>Administrador</span>
                    </div>
                    <img src="https://joeschmoe.io/api/v1/random" alt="userPick" title="userPick"/>	
                    <img class="cart" src=${cart} />
                </div>
            </header>           
            <nav>
                <a href="/prueba"> Boton 1</a>                
                <a href="#"> Boton 2</a>
                <a href="#"> Boton 3</a>
                <a href="#"> Boton 4</a>                
            </nav>
            <main>            
                ${children()}
            </main>
         </div>
    `;
};
