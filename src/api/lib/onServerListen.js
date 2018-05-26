const log = require('llog')
const config = require('../../lib/config')

const {
    PORT
} = config

module.exports = function() {
    log.info('web api started on port %s', PORT)
}
