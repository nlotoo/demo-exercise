const { Router } = require('express');
const router = Router();

const cubeMaker = require('../modules/cubic')
const uniqueId = require('unique')


router.get('/', (req, res) => {
    res.render('home', { title: 'Home' })
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
})
router.post('/create', (req, res) => {
    let data = req.body

    //  TODO: VALIDATION
    // if (data.name.length < 6) {

    //     throw new Error('Your name is incorect lenngth')
    // }


    // ДО ТУК

    let make = new cubeMaker(uniqueId(),
        data.name,
        data.description,
        data.imageUrl,
        data.dificultyLevel)

    console.log(make)

    res.redirect('/')
})


router.get('/details/:id?', (req, res) => {
    res.render('details', { title: 'Details' })
})




module.exports = router