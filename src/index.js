const log = require('llog')
const errortrap = require('errortrap')
const startApi = require('./api/startApi')
const apiStarted = require('./api/lib/apiStarted')
const express = require('express')
const app = express()

log.info('starting api')

//errortrap()

startApi(express(), apiStarted)
