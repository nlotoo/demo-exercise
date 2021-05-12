const { Router } = require('express');
const router = Router();



router.get('/', (req, res) => {
    console.log('its works')
    res.render('home', { layout: false })

})

module.exports= router