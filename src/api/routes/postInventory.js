const Router = require('express').Router
const postInventory = require('../lib/postInventory')

const router = Router()

router.post('/', postInventory)

module.exports = router
