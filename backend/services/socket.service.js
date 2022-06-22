
var gIo = null

function connectSockets(http) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*',
        }
    })
    gIo.on('connection', socket => {
        console.log('New socket', socket.id)
        socket.on('disconnect', () => {
          console.log('someone disconnect');
        })
        socket.on('colorVotes-update', (colorVotes)=>{
            socket.broadcast.emit('colorVotes-changed', colorVotes)
        })
    })
}

module.exports = {
    connectSockets
}