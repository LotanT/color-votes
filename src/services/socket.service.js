import io from 'socket.io-client'

export const SOCKET_EVENT_COLORVOTES_CHANGE = 'colorVotes-changed';
export const SOCKET_EMIT_COLORVOTES_UPDATE = 'colorVotes-update';

const baseUrl = (process.env.NODE_ENV === 'production')? '' : 'http://localhost:3030'
export const socketService = createSocketService()

socketService.setup()


function createSocketService() {
  var socket = null;
  const socketService = {
    setup() { 
      socket = io(baseUrl)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb=null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data, topic = null) {
      socket.emit(eventName, data, topic)
    },
    terminate() {
      socket = null
    }
  }
  return socketService
}
