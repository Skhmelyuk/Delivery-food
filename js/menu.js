const cardsMenu = document.querySelector('.cards-menu');
const sectionHeadingMenu = document.querySelector('.section-heading');


const changeTitle = (menu) => {

	const { name, kitchen, price, stars } = menu;

	sectionHeadingMenu.insertAdjacentHTML('beforeend', `<h2 class="section-title restaurant-title">${name}</h2>`);
	sectionHeadingMenu.insertAdjacentHTML('beforeend', `<div class="card-info">
																												<div class="rating">${stars}</div>
																												<div class="price">От ${price} ₽</div>
																												<div class="category">${kitchen}</div>
																											</div>`)
}

const renderItems = (data) => {
	data.forEach(({ id, image, name, price, description }) => {
		const card = document.createElement('div');
		card.classList.add('card');
		card.innerHTML = `
						<img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">${description}</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${price} ₽</strong>
							</div>
						</div>
		`;
		cardsMenu.append(card);
	});
}

if (localStorage.getItem('menu')) {
	const menu = JSON.parse(localStorage.getItem('menu'));
	const { products } = menu;

	changeTitle(menu);

	fetch(`./db/${products}`)
		.then((response) => response.json())
		.then((data) => { renderItems(data) })
		.catch((error) => {
			console.log(error);
		})

} else {
	window.location.href = '/';
}
