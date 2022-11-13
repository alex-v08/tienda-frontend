import 'victormono';

const activateLink = () => {
	const activePage = window.location.pathname;
	const navLinks = document.querySelectorAll('nav a');

	if (activePage !== '/') {
		navLinks.forEach((link) => {
			if (link.href.includes(`${activePage}`)) {
				link.classList.add('active');
			}
		});
	}
	if (activePage === '/') navLinks[0].classList.add('active');
};

window.addEventListener('DOMContentLoaded', activateLink);
