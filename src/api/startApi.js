const config = require('../lib/config')
const postInventory = require('./routes/postInventory')
const onServerListen = require('./lib/onServerListen')

const PORT = config.PORT

module.exports = function(server, cb)  {
    // routes
    server.post('/', postInventory)

    server.listen(PORT, onServerListen)
    cb()
}


