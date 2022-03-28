const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 4001

server.use(json())
server.use(cors())

server.get('/', (req, res) => {
    res.send("Hello World\n")
})

server.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})