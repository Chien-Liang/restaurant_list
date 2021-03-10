const restaurantsList = require('../restaurant.json').results

const getIndex = (req, res) => {
	res.render('index', { restaurants: restaurantsList })
}

const getSearch = (req, res) => {
	const keyword = req.query.keyword.toLowerCase()
	const searchResults = restaurantsList.filter(
		restaurant =>
			restaurant.name.toLowerCase().includes(keyword) ||
			restaurant.name_en.toLowerCase().includes(keyword) ||
			restaurant.category.includes(keyword)
	)
	res.render('index', { restaurants: searchResults })
}

const getShowpage = (req, res) => {
	console.log(req.params)
	res.render('showPage')
}

exports.getIndex = getIndex
exports.getSearch = getSearch
exports.getShowpage = getShowpage
