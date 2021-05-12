
const express = require('express');
const app = express();

const headlebarsExpress = require('express-handlebars')

const config = require('./config/config.js')

// setup express- headnlebars
app.engine('hbs', headlebarsExpress({ extname: ".hbs" }))
app.set('view engine', 'hbs')


// setup middleware 
app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('its works')
    res.render('home')

})

app.listen(config.PORT, () => console.log(`Server start at port ${config.PORT}`))