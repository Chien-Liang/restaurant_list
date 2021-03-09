// Setups
const express = require('express')
const app = express()

// Routers
app.get('/', (req, res) => {
	res.send('<h1>Test</h1>')
})

// Link to server
app.listen(3000, () => console.log('Listening to http://localhost:3000'))
