const restaurantsList = require('../restaurant.json').results

const getIndex = (req, res) => {
	res.render('index', { restaurants: restaurantsList })
}

const getSearch = (req, res) => {
	const keyword = req.query.keyword
	const searchResults = restaurantsList.filter(restaurant =>
		restaurant.name.includes(keyword)
	)
	res.render('index', { restaurants: searchResults })
}

exports.getIndex = getIndex
exports.getSearch = getSearch
