const restaurantsList = require('../restaurant.json').results

const getIndex = (req, res) => {
	res.render('index', { restaurants: restaurantsList })
}

const getSearch = (req, res) => {
	console.log(req.query)
	res.render('index')
}

exports.getIndex = getIndex
exports.getSearch = getSearch
