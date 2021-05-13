
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const expressConfig = require('./config/express')

const config = require('./config/config.js')
const router = require('./routes')



expressConfig(app)

app.use(router)
app.use(bodyParser.urlencoded({ extended: true }))




app.listen(config.PORT, () => console.log(`Server start at port ${config.PORT}`))