const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
  res.end('I am connected');
});

const io = socketio(server);

io.on('connection', (socket, req) => {
  // ws.send become socket.imit
  socket.emit('welcome', 'Welcome to the websocket server!!');
  socket.on('connect', payload => {});

  socket.on('message', data => {
    console.log(data);
  });
});

server.listen(8000);
