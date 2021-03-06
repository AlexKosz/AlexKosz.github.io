const heroSec = document.querySelector('#hero');
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile__menu--container');
const mobileMenuLinks = document.querySelector('.mobile__menu--links');
const mobileMenuOverlay = document.querySelector('.mobile__menu--overlay');

window.onload = function () {
	document.querySelector('.preloader').classList.add('invisible');
	document.querySelector('.preloader').style.opacity = '0';
	document.querySelector('body').style.overflowY = 'scroll';
};

const navbarObserver = new IntersectionObserver(
	function (entries) {
		console.debug(entries);
		if (!entries[0].isIntersecting) {
			navbar.classList.add('sticky');
		} else {
			navbar.classList.remove('sticky');
		}
	},
	{ threshold: 0.85 }
);
navbarObserver.observe(heroSec);




const mobileMenuCallback = function () {
	if (mobileMenu.classList.contains('open')) {
		mobileMenu.style.transform = 'translateX(-100%)';
		mobileMenu.classList.remove('open');
		mobileMenuOverlay.classList.add('invisible');
	} else {
		mobileMenu.style.transform = 'translateX(0)';
		mobileMenu.classList.add('open');

		mobileMenuOverlay.classList.remove('invisible');
	}
};
document.querySelector('.navbar-toggler').addEventListener('click', mobileMenuCallback);
mobileMenuLinks.addEventListener('click', mobileMenuCallback);
mobileMenuOverlay.addEventListener('click', mobileMenuCallback);
