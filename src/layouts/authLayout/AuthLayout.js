import { Brand, NavBar, UserProfile } from '../../components';
import { navigateTo } from '../../router/router';
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

	const divElement = document.createElement('div');
	divElement.classList = 'authLayout';
	divElement.innerHTML = view;

	const main = divElement.querySelector('#children');
	main.appendChild(await children());

	const nav = divElement.querySelectorAll('.navbar button');
	const cart = divElement.querySelector('#cart');

	nav.forEach((el) => {
		el.addEventListener('click', (e) => {
			const { textContent } = e.target;
			navigateTo(`/${textContent.trim()}`);
		});
	});

	cart.addEventListener('click', () => {
		navigateTo(`/cart`);
	});

	return divElement;
};
