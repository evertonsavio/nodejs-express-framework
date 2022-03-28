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


server.put('/:value', (req, res) => {
    const value = req.params.value
    const id = req.query.id
    console.log(`QUERY IS ${id} AND PARAMETER IS ${value}`)
    
    temperatures.map(temperature => {
        if(temperature.id == id){
            console.log(`FOUND ID ${id} CHANGING VALUE OF OBJECT`)
            temperature.temperature = value
        }
    });

    res.status(200).send()
})

server.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})