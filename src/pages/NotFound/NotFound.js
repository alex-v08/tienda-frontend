import './styles/NotFound.css';

export const NotFound = () => {
	let view = `<h1>4💀4</h1>	
				<a href="/"> <~~ </a>`;
	
	const divElement = document.createElement("div");
	divElement.classList = "notfound";
	divElement.innerHTML = view;

	return divElement;
};


