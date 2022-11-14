import 'victormono';

export const activateLink = (activePage) => {
	const navLinks = document.querySelectorAll('.navbar a');
	console.log('navLinks', navLinks);
	if (navLinks.length > 0) {
		if (activePage !== '/') {
			navLinks.forEach((link) => {
				if (link.href.includes(`${activePage}`)) {
					link.classList.add('active');
				}
			});
		}

		if (activePage === '/') navLinks[0].classList.add('active');
	}
};
