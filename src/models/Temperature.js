const mongoose = require('mongoose')

const TemperatureSchema = new mongoose.Schema(
    {
        temperature: Number
    }
)

module.exports = mongoose.model("Temperatures", TemperatureSchema)