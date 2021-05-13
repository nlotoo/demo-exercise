const { Router } = require('express');
const router = Router();

const controlerProduction = require('./controllers/productController')
const aboutControler = require('./controllers/aboutController')
//const detailsController = require('./controllers/detailControler')
const NotFoundController = require('./controllers/notFoundController')


router.use('/', controlerProduction);
router.use('/create', controlerProduction);
router.use('/about', aboutControler);
router.use('/details/:id?', controlerProduction)



router.use('*', NotFoundController)

// router.get('/', (req, res) => {
//     console.log('its works')
//     res.render('home', { layout: false })

// })

module.exports = router;