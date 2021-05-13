const { Router } = require('express');
const router = Router();

// const cubeMaker = require('../models/cubic')
// const uniqueId = require('unique')

const productServices = require('../services/productServices.js')
let product = productServices.getAllData

router.get('/', (req, res) => {
    res.render('home', { title: 'Home', product })


});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
})
router.post('/create', (req, res) => {
    let data = req.body

    // TODO: VALIDATION
    productServices.create(data)

    res.redirect('/create')
  
})


router.get('/details/:id?', (req, res) => {
    res.render('details', { title: 'Details' })
})




module.exports = router