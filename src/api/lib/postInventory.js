const log = require('llog')
const Joi = require('joi')

module.exports = function (req, res) {
    log.info('processing POST to / ...')

    const payloadSchema = Joi.object().options({ abortEarly: false }).keys({
        organization: Joi.string().required().min(1),
        products: Joi.array().required().min(1),
        job: Joi.object().keys({
            id: Joi.string().required().min(10), // unix timestamp used as id prefix
            currentPage: Joi.number().required().min(1),
            pages: Joi.number().required().min(1)
        }).required().length(3)
    })

    const {
        organization,
        products,
        job
    } = req.body

    const payload = {
        organization,
        products,
        job
    }
    const validationResult = payloadSchema.validate(payload)
    if (validationResult.error !== null) {
        log.info({msg: 'invalid api post received', details: validationResult.error.details})
        res.json({result: 'failed', error: 'payload invalid'})
    } else {
        let numProducts = products.length
        log.info({msg: 'api post received', organization, numProducts, job})
        // log.info({msg: 'payload contents', payload: JSON.stringify(payload)})
        //bus.send('inventory.product.export', payload, { ack: true, correlationId: hri.random() }, onProductExportSent(res))
    }
}
/*
const onProductExportSent = function(res) {
    return (err) => {
        if (err) log.info(err)
        log.info('inventory export sent successfully')
        res.json({result: 'success'})
    }
}
*/
