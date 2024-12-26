import io from './server.js';

io.on('connection', (socket) => {
  console.log('A client has connected! ID:', socket.id);

  socket.on('text_editor', (text) => {
    socket.broadcast.emit('text_editor_clients', text);
  });
});
