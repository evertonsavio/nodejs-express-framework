const express = require('express')
const router = express.Router()
const Temperature = require('../models/Temperature')

const expressValidator = require('express-validator')

const validate = [
    expressValidator.check('temperature').isLength({min: 1}).withMessage('Field temperature can not be null'),
    expressValidator.check('temperature').isNumeric().withMessage('Field temperature should be a number')
]

router.get('/', (req, res) => {
    Temperature.find().then(temperatures => {
        res.status(200).send(temperatures);
    }).catch(error => {
        res.status(500).send(error)
    })
})

router.get('/:id', (req, res) => {

    Temperature.findById(req.params.id)
    .then(temperature => {
        res.status(200).send(temperature)
    }).catch(error => {
        res.status(404);
    })

})

router.post('/', [validate], (req, res) => {

    const erros = expressValidator.validationResult(req);
    if(!erros.isEmpty()){
        return res.status(422).send({erros: erros.array()})
    }

    const temperature = new Temperature({
        temperature: req.body.temperature
    })

    temperature.save()
    .then(result => {
        res.status(201).send(result)
    })
})

router.delete('/', (req, res) => {
    
    Temperature.deleteMany().then(result => {
        res.status(200).send()
    });
})

router.delete('/query', (req, res) => {
    
    Temperature.findByIdAndRemove(req.query.id)
    .then(result => {
        res.status(200).send(result)
    }).catch( error => {
        res.status(404).send()
    })
})

router.put('/:value', (req, res) => {
    const pathValue = req.params.value

    Temperature.findById(req.query.id).then(temperature => {
        temperature.temperature = pathValue
        temperature.save().then(result => {
            res.status(200).send(result)
        })
    }).catch( error => {
        res.status(404).send()
    })

})

module.exports = router;