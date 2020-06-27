
// запрет скролла карты без клика
document.addEventListener('click', function (e) {
	var map = document.querySelector('#map-wrap iframe')
	if (e.target.id === 'map-wrap') {
		map.style.pointerEvents = 'all'
	} else {
		map.style.pointerEvents = 'none'
	}
})