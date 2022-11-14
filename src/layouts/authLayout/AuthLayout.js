import { Brand, NavBar, UserProfile } from '../../components';
import { useAuthLayout } from './hook/useAuthLayout';
import './styles/authLayout.css';

export const AuthLayout = async (children) => {
	const view = `<header>
                        ${Brand()}
                        ${UserProfile()}
                    </header>    
                    <nav class="navbar"> 
                        ${NavBar()} 
                    </nav>   
                    <main id="children"> 
                    </main>               
    `;

	return useAuthLayout(view, children);
};
