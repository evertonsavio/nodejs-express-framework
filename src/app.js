const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 4001

server.use(json())
server.use(cors())

let temperatures = [];

server.get('/', (req, res) => {
    res.status(200).send(`${temperatures}\n`)
})

server.post('/', (req, res) => {
    const request = req.body
    temperatures.push(request.temperature)
    res.status(201).send()
})

server.delete('/', (req, res) => {
    temperatures = [];
    res.status(200).send()
})

server.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})