
new Swiper('.swiper', {
	loop: true,

	// Стрелки для навигации
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	// Навигация
	// Буллеты, текущие положение
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
		// Денамические буллеты
		dynamicBullets: true,
		// // Кастомные буллеты
		// renderBullet: function (index, className) {
		// 	return `<span class="${className}">${index + 1}</span>`
		// },
	},

	// Автоплей
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	// Скорость автопрокрутки
	speed: 1200,

	// Управление клавиатурой
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDoun: true,
	},

	// Управление колесом мыши
	mousewheel: {
		sensisivity: 1,
		eventsTarget: '.swiper',
	}
});