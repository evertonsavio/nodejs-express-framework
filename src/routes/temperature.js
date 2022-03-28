const express = require('express')
const router = express.Router()

let dummyCount = 0
let temperatures = [];

router.get('/', (req, res) => {
    res.status(200).send(temperatures)
})

router.get('/:id', (req, res) => {
    const pathId = req.params.id
    const temperatureObject = temperatures.filter(temperature => temperature.id == pathId)
    res.status(200).send(temperatureObject)
})

router.post('/', (req, res) => {
    const request = req.body

    const temperatureObject = {
        id: dummyCount += 1,
        temperature: request.temperature
    }

    temperatures.push(temperatureObject)
    res.status(201).send()
})

router.delete('/', (req, res) => {
    temperatures = [];
    res.status(200).send()
})

router.delete('/query', (req, res) => {
    const queryId = req.query.id
    
    filteredList = temperatures.filter(temperature => temperature.id != queryId)
    temperatures = filteredList

    res.status(200).send()
})

router.put('/:value', (req, res) => {
    const pathValue = req.params.value
    const queryId = req.query.id
    console.log(`QUERY IS ${queryId} AND PARAMETER IS ${pathValue}`)
    
    temperatures.map(temperature => {
        if(temperature.id == queryId){
            console.log(`FOUND ID ${queryId} CHANGING VALUE OF OBJECT`)
            temperature.temperature = pathValue
        }
    });

    res.status(200).send()
})

module.exports = router;