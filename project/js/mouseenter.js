var cardPrice = document.querySelectorAll('.price-list__item');

function mouseenterCard(element) {
	element.addEventListener('mouseenter', function() {
		for (var i = 0; i <= cardPrice.length-1; i++) {
			cardPrice[i].classList.remove('price-list__item--active');
		}
		element.classList.add('price-list__item--active');
	});
}

for (var i = 0; i <= cardPrice.length-1; i++) {
	mouseenterCard(cardPrice[i]);
}