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
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// 	pauseOnMouseEnter: true,
		// },
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

export function aboutSlider() {
	const about = new Swiper('.about-page__slider', {
		loop: true,
		speed: 800,
		modules: [Pagination, Autoplay],
		slidesPerView: 1,
		//centeredSlides: true,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// 	pauseOnMouseEnter: true,
		// },
		pagination: {
			el: '.banner__pagination',
			clickable: true,
		},

		breakpoints: {
			400: {
				slidesPerView: 1,
				spaceBetween: 20
			},

			767: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20
			},
		}
	});
}

export function delivery() {
	const container = document.querySelector('.delivery__slider');


	if (container) {
		const delivery = new Swiper(container, {
			loop: true,
			speed: 800,
			modules: [Pagination, Autoplay],
			slidesPerView: 1,
			pagination: {
				el: '.banner__pagination',
				clickable: true,
			},
			breakpoints: {
				420: {
					slidesPerView: 1,
					spaceBetween: 20
				},

				767: {
					slidesPerView: 3,
					spaceBetween: 25
				},

				992: {
					slidesPerView: 4,
					spaceBetween: 30
				},
			}
		});
	}
}

// export function cert() {
// 	const container = document.querySelector('.cert__container');
// 	const items = document.querySelectorAll('.cert__item');


// 	if (container) {
// 		if (window.innerWidth < 992) {
// 			items.forEach(function (item) {
// 				item.classList.add('swiper-slide');
// 			});

// 			const cert = new Swiper(container, {
// 				loop: true,
// 				speed: 800,
// 				modules: [Pagination, Autoplay],
// 				slidesPerView: 1,

// 				breakpoints: {
// 					420: {
// 						slidesPerView: 1,
// 						spaceBetween: 20
// 					},
// 					992: {
// 						slidesPerView: 2,
// 						spaceBetween: 20
// 					},


// 				}
// 			});
// 		}
// 	}
// }

export function city() {
	const container = document.querySelector('.city__slider');
	const wrapper = document.querySelector('.city__wrapper');
	const items = document.querySelectorAll('.city__item');


	if (container) {
		if (window.innerWidth < 992) {
			wrapper.classList.add('swiper-wrapper');
			items.forEach(function (item) {
				item.classList.add('swiper-slide');
			});

			const city = new Swiper(container, {
				loop: true,
				speed: 800,
				modules: [Pagination, Autoplay],
				slidesPerView: 1,
				spaceBetween: 20,
				pagination: {
					el: '.banner__pagination',
					clickable: true,
				},

				breakpoints: {
					420: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 20
					},
				}
			});
		}
	}
}

export function article() {
	const container = document.querySelector('.article__slider');
	const wrapper = document.querySelector('.article__prod-wrapper');
	const items = document.querySelectorAll('.card__item');


	if (container) {
		if (window.innerWidth < 992) {
			wrapper.classList.add('swiper-wrapper');
			items.forEach(function (item) {
				item.classList.add('swiper-slide');
			});

			const city = new Swiper(container, {
				loop: true,
				speed: 800,
				modules: [Pagination, Autoplay],
				slidesPerView: 1,
				spaceBetween: 20,
				pagination: {
					el: '.banner__pagination',
					clickable: true,
				},

				breakpoints: {
					420: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 20
					},
				}
			});
		}
	}
}

export function recipes() {
	const container = document.querySelector('.recipes__slider');
	const wrapper = document.querySelector('.recipes__list');
	const items = document.querySelectorAll('.recipes__card');


	if (container) {
		if (window.innerWidth < 992) {
			wrapper.classList.add('swiper-wrapper');
			items.forEach(function (item) {
				item.classList.add('swiper-slide');
			});

			const city = new Swiper(container, {
				loop: true,
				speed: 800,
				modules: [Pagination, Autoplay],
				slidesPerView: 1,
				spaceBetween: 20,
				pagination: {
					el: '.banner__pagination',
					clickable: true,
				},

				breakpoints: {
					420: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 20
					},
				}
			});
		}
	}
}



export function better() {
	if (window.innerWidth < 768) {
		let wrapper;
		const container = document.querySelector('.better__container');
		if (container) {
			wrapper = container.querySelector('.better__wrapper');
		} else {
			wrapper = false;
		}
		if (wrapper) {
			const slides = wrapper.querySelectorAll('.card__item');

			container.classList.add('swiper');
			wrapper.classList.add('swiper-wrapper');
			slides.forEach((slide) => {
				slide.classList.add('swiper-slide');
			});

			const best = new Swiper('.better__container', {
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
					el: '.better__pagination',
					clickable: true,
				},
			});
		}

	}

}

export function osetra() {
	if (window.innerWidth < 768) {
		const container = document.querySelector('.card__list');
		if (container) {
			const wrapper = document.querySelector('.card__wrapper');
			const slides = wrapper.querySelectorAll('.card__item');

			container.classList.add('swiper');
			wrapper.classList.add('swiper-wrapper');
			slides.forEach((slide) => {
				slide.classList.add('swiper-slide');
			});

			const best = new Swiper(container, {
				loop: true,
				speed: 800,
				modules: [Pagination, Autoplay],
				slidesPerView: 1,
				centeredSlides: true,
				observer: true,
				autoplay: {
					delay: 4000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
				pagination: {
					el: '.card__pagination',
					clickable: true,
				},
			});
		}

	}

}

export function reviews() {
	const best = new Swiper('.reviews__slider', {
		loop: true,
		speed: 800,
		modules: [Pagination, Autoplay, Navigation],
		slidesPerView: 1,
		centeredSlides: true,
		observer: true,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// 	pauseOnMouseEnter: true,
		// },
		// pagination: {
		// 	el: '.reviews__pagination',
		// 	clickable: true,
		// },
		navigation: {
			prevEl: '.reviews__arrow-prev',
			nextEl: '.reviews__arrow-next'
		},


		breakpoints: {
			400: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 20
			},

			767: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerGroup: 3,
				slidesPerView: 3,
				spaceBetween: 20
			},
		}
	});
}
export function our() {
	const best = new Swiper('.our__slider', {
		//loop: true,
		speed: 800,
		modules: [Pagination, Autoplay, Navigation],
		slidesPerView: 1,
		spaceBetween: 29,
		//centeredSlides: true,
		//observer: true,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// 	pauseOnMouseEnter: true,
		// },
		pagination: {
			el: '.banner__pagination',
			clickable: true,
		},
		breakpoints: {
			400: {
				slidesPerView: 1,
				spaceBetween: 20
			},

			767: {
				slidesPerView: 2,
				spaceBetween: 29
			},
			992: {
				slidesPerView: 3.5,
				spaceBetween: 29
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
export function readMore(viewsport = 2000) {
	const textBlocks = document.querySelectorAll(".seo__block");

	if (viewsport === 'all' || window.innerWidth < viewsport) {
		if (textBlocks) {
			let max = 1000;
			let hideHeight = 128;

			textBlocks.forEach((block) => {
				block.style.maxHeight = hideHeight;

				let showMoreLink = document.createElement('a');
				showMoreLink.classList.add('seo__all');
				showMoreLink.textContent = 'Read more';
				showMoreLink.href = '#'; // Додайте посилання на правильну сторінку, яку користувач має відвідати
				block.parentNode.insertBefore(showMoreLink, block.nextSibling);

				showMoreLink.addEventListener('click', function (event) {
					event.preventDefault();
					if (parseFloat(block.style.maxHeight) === max) {
						block.style.maxHeight = hideHeight + 'px';
						showMoreLink.classList.remove('open');
					} else {
						block.style.maxHeight = max + 'px';
						showMoreLink.classList.add('open');
					}
				});
			});
		}
	}
}