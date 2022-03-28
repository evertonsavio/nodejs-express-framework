const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const temperatures = require('./routes/temperature')

const server = express()
const port = 4001

server.use(json())
server.use(cors())
server.use('/temperature', temperatures)

server.get('/', (req, res) => {
    res.status(200).send(
        `<html>
            <head></head>
            <body>
                <h1> This is a Server Side Render Web page</h1>
                <div>
                    <p> Ok, I'm running on port ${port}.
                </div>
                <h2>Server RESTful Endpoints:</h2>
                <ul>
                    <li>curl -X POST http://localhost:4001/temperature -H 'Content-Type: application/json' -d "{\"temperature\": {value}}"</li>
                    <li>curl -X GET http://localhost:4001/temperature</li>
                    <li>curl -X GET http://localhost:4001/temperature/{id}</li>
                    <li>curl -X PUT http://localhost:4001/temperature/{temperature}?id={id}</li>
                    <li>curl -X DELETE http://localhost:4001/temperature</li>
                    <li>curl -X DELETE http://localhost:4001/temperature/query?id={id}</li>
                </ul>
            </body>
        </html>
        `
    )
})

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})