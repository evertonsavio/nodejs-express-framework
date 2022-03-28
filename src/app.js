const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const temperatures = require('./routes/temperature')

const server = express()
const port = 4001

server.use(json())
server.use(cors())
server.use('/temperature', temperatures)

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})