const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 4001

server.use(json())
server.use(cors())

let dummyCount = 0
let temperatures = [];

server.get('/', (req, res) => {
    res.status(200).send(temperatures)
})

server.get('/:id', (req, res) => {
    const pathId = req.params.id
    const temperatureObject = temperatures.filter(temperature => temperature.id == pathId)
    res.status(200).send(temperatureObject)
})

server.post('/', (req, res) => {
    const request = req.body

    const temperatureObject = {
        id: dummyCount += 1,
        temperature: request.temperature
    }

    temperatures.push(temperatureObject)
    res.status(201).send()
})

server.delete('/', (req, res) => {
    temperatures = [];
    res.status(200).send()
})

server.delete('/query', (req, res) => {
    const queryId = req.query.id
    
    filteredList = temperatures.filter(temperature => temperature.id != queryId)
    temperatures = filteredList

    res.status(200).send()
})

server.put('/:value', (req, res) => {
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

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})