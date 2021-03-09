// Setups
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// Routers
app.get('/', (req, res) => {
	res.render('index')
})

// Link to server
app.listen(3000, () => console.log('Listening to http://localhost:3000'))
