import './styles/error.css';

export const ErrorPage = (
	status = '5💀3',
	message = 'Servicio no disponible'
) => {
	let view = `<div class="error">
					<h1>${status}</h1>	
					<h2>${message}</h2>
				</div>`;
	return view;
};
