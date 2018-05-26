const log = require('llog')

module.exports = function (err) {
    if (err) throw err
    log.info('api started')
}
