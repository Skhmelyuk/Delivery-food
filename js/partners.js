const cardsRestaurants = document.querySelector('.cards-restaurants');

const renderItems = (data) => {
	data.forEach((item) => {
		const a = document.createElement('a');
		const { image, name, time_of_delivery, stars, price, kitchen, products } = item;
		a.setAttribute('href', '/restaurant.html');
		a.classList.add('card', 'card-restaurant');
		a.innerHTML = `
								<img src="${image}" alt="${name}" class="card-image" />
								<div class="card-text">
									<div class="card-heading">
										<h3 class="card-title">${name}</h3>
										<span class="card-tag tag">${time_of_delivery} мин</span>
									</div>
									<div class="card-info">
										<div class="rating">${stars}</div>
										<div class="price">${price}</div>
										<div class="category">${kitchen}</div>
									</div>
								</div>
		`;
		a.addEventListener('click', (event) => {
			event.preventDefault();
			localStorage.setItem('menu', JSON.stringify(item));
			window.location.href = '/restaurant.html';
		})
		cardsRestaurants.append(a);
	});
}

fetch('./db/partners.json')
	.then((response) => response.json())
	.then((data) => { renderItems(data) })
	.catch((error) => {
		console.log(error);
	})
