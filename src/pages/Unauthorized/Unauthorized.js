import './styles/unauthorized.css';

export const Unauthorized = () => {
	let view = `<h1>4💀1</h1>	
				<a href="/"> <~~ </a>
				`;

	const divElement = document.createElement("div");
	divElement.classList = "unauthorized";
	divElement.innerHTML = view;

	return divElement;
};


