const uniqueId = require('unique')
const cubeMaker = require('../models/cubic')
const fs = require('fs')
const database = require('../config/db.json')


function getAllData() {
    return database
}



function create(data) {


    const upComingData = new cubeMaker(uniqueId(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel)

    database.push(upComingData)

    fs.writeFile(__dirname + '/../config/db.json', JSON.stringify(database), (err) => {
        if (err) {
            console.log(err)
            return
        }


    })

}


module.exports = {
    create,
    getAllData,   
}