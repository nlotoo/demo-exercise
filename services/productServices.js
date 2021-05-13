const uniqueId = require('unique')
const cubeMaker = require('../models/cubic')
const fs = require('fs')
const database = require('../config/db.json')
const path = require('path')

function getAllData(query) {
    let result = database


    if (query.search) {
        result = database.filter(x => x.name.toLowerCase().includes(query.search))
    } else if (query.from) {
        result = database.filter(x => Number(x.difficultyLevel) >= query.from)
    } else if (query.to) {
        result = database.filter(x => Number(x.difficultyLevel) <= query.to)
    }



    return result
}

function getOne(id) {
    return database.find(x => x.id == id)

}

function create(data) {

    const upComingData = new cubeMaker(uniqueId(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel)

    database.push(upComingData)

    fs.writeFile(path.join(__dirname, '/../config/db.json'), JSON.stringify(database), (err) => {
        if (err) {
            console.log(err)
            return
        }
    })

}


module.exports = {
    create,
    getAllData,
    getOne,
}