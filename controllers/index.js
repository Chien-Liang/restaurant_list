const restaurantsList = require('../restaurant.json').results

const getIndex = (req, res) => {
	res.render('index')
}
exports.getIndex = getIndex
