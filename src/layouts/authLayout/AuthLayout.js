import { Brand, NavBar, UserProfile } from "../../components";
import "./styles/authLayout.css";

export const AuthLayout = async (children) => {  
    const view =  `<header>
                        ${Brand()}
                        ${UserProfile()}
                    </header>    
                    <nav> 
                        ${NavBar()} 
                    </nav>   
                    <main id="children"> 
                    </main>               
    `;

    const divElement = document.createElement("div");
    divElement.classList = "authLayout";
    divElement.innerHTML = view;

    const main = divElement.querySelector("#children");
    main.appendChild(await children());

    return divElement;
};
