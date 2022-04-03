const express = require('express')
const mongoose = require('mongoose')
const { json } = require('body-parser')
const cors = require('cors')
const path = require('path');

const temperatures = require('./routes/temperature')

const server = express()
const port = 4001

server.use(json())
server.use(cors())
server.use('/temperature', temperatures)
server.use(express.static('public'))

server.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"))
})

server.use((req, res) => res.status(404).sendFile(path.join(__dirname, "views", "404.html")));

const main = async () => {
  await mongoose.connect(process.env.MY_CONN);
}

main()
.then(() => {
    server.listen(port, () => {
        console.log(`server running on port ${port}`)
      })
})
.catch(err => console.log(err));