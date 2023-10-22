import $ from "jquery";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Fancybox } from "@fancyapps/ui";


import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function isWebp() {
	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}

export function burgerMenu() {
	$('.header__burger').on("click", function (event) {
		$('.header__burger, .header__menu').toggleClass('open');
		$('body').toggleClass('lock');
	});
}

export function sticky() {
	window.addEventListener('scroll', function () {
		$('header').toggleClass('sticky', window.scrollY > 0);
	});
}

export function pageNav() {
	const headerLinks = $('.header__link');

	headerLinks.each(function () {
		$(this).on('click', function (event) {
			event.preventDefault();

			const targetId = $(this).attr('href');
			const targetElement = $(`${targetId}:first`);
			const targetOffset = targetElement.offset().top - 100;
			$('html, body').animate({
				scrollTop: targetOffset
			}, 800);
		});
	});

	function activateMenuItem() {
		const scrollPosition = $(window).scrollTop();

		headerLinks.each(function () {
			const section = $(`${$(this).attr('href')}:first`);
			if (
				section.offset().top <= scrollPosition + 105 &&
				section.offset().top + section.outerHeight() > scrollPosition + 105
			) {
				headerLinks.removeClass('active');
				headerLinks.parent().removeClass('active');
				$(this).addClass('active');
				$(this).parent().addClass('active');
			}
		});
	}

	$(window).on('scroll', activateMenuItem);
}
export function accordion(mode = true) {
	const accordionTriggers = document.querySelectorAll('.accordion-trigger');

	// Додати обробник подій для кожного заголовку
	accordionTriggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			if (mode) {
				// Закрити всі аккордеони, крім того, який був клікнутий
				accordionTriggers.forEach(otherTrigger => {
					if (otherTrigger !== trigger) {
						otherTrigger.classList.remove('active');
						const otherContent = otherTrigger.nextElementSibling;
						let parentContainer = otherTrigger.parentNode.parentNode;
						otherContent.classList.remove('active');
					}
				});
			}

			trigger.classList.toggle('active');

			const content = trigger.nextElementSibling;

			content.classList.toggle('active');
		});
	});
}

export function accordionMobile(mode = true) {
	const accordionTriggers = document.querySelectorAll('.accordion-trigger-mobile');
	if (window.innerWidth < 992) {
		accordionTriggers.forEach(trigger => {
			trigger.addEventListener('click', () => {
				if (mode) {
					// Закрити всі аккордеони, крім того, який був клікнутий
					accordionTriggers.forEach(otherTrigger => {
						if (otherTrigger !== trigger) {
							otherTrigger.classList.remove('active');
							const otherContent = otherTrigger.nextElementSibling;
							let parentContainer = otherTrigger.parentNode.parentNode;
							otherContent.classList.remove('active');
						}
					});
				}

				trigger.classList.toggle('active');

				const content = trigger.nextElementSibling;

				content.classList.toggle('active');
			});
		});
	}
}

export function banner() {
	const banner = new Swiper('.banner__container', {
		loop: true,
		speed: 800,
		modules: [Pagination, Autoplay],
		slidesPerView: 1,
		observer: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: '.banner__pagination',
			clickable: true,
		},
	});
}

export function best() {
	const best = new Swiper('.best__slider', {
		loop: true,
		speed: 800,
		modules: [Pagination, Autoplay],
		slidesPerView: 1,
		centeredSlides: true,
		observer: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: '.best__pagination',
			clickable: true,
		},

		breakpoints: {
			400: {
				slidesPerView: 2,
				spaceBetween: 20
			},

			767: {
				slidesPerView: 3.5,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 4.5,
				spaceBetween: 20
			},
		}
	});
}

export function reviews() {
	const best = new Swiper('.reviews__slider', {
		loop: true,
		speed: 800,
		modules: [Pagination, Autoplay],
		slidesPerView: 1,
		centeredSlides: true,
		observer: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: '.reviews__pagination',
			clickable: true,
		},

		breakpoints: {
			400: {
				slidesPerView: 1.5,
				spaceBetween: 20
			},

			767: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 3.3,
				spaceBetween: 20
			},
		}
	});
}

export function tabs(container) {
	if (container) {
		document.addEventListener("DOMContentLoaded", function () {
			const tabButtons = container.querySelectorAll(".tab__button");
			const tabContents = container.querySelectorAll(".tab__content");

			tabButtons.forEach(function (button) {
				button.addEventListener("click", function (e) {
					e.preventDefault();
					const tabId = this.getAttribute("data-tab");
					showTab(tabId);
				});
			});

			function showTab(tabId) {
				tabContents.forEach(function (content) {
					if (content.getAttribute("data-tab") === tabId) {
						content.style.opacity = 0;
						content.style.display = "flex";
						content.classList.add('active');
						setTimeout(function () {
							content.style.opacity = 1;
						}, 50);
					} else {
						content.style.opacity = 0;
						content.style.display = "none";
						setTimeout(function () {
							content.classList.remove('active');
							content.style.opacity = 0;
						}, 50);
					}
				});
				tabButtons.forEach(function (button) {
					if (button.getAttribute("data-tab") === tabId) {
						button.classList.add("active");
					} else {
						button.classList.remove("active");
					}
				});

			}

			showTab(tabButtons[0].getAttribute("data-tab"));
		});
	}

}