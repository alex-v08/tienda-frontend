import { Brand, NavBar, UserProfile } from "../../components";
import "./styles/authLayout.css";

export const AuthLayout = async (children) => {
  return `<div class="authLayout">
            <header>
               ${Brand()}
               ${UserProfile()}
            </header>    
            <nav> 
                ${NavBar()} 
            </nav>   
            <main>            
                ${await children()}
            </main>
         </div>
    `;
};
