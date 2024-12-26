import { textEditorUpdate } from './document.js';

const socket = io();

function textEditorEmit(text) {
  socket.emit('text_editor', text);
}

socket.on('text_editor_clients', (text) => {
  textEditorUpdate(text);
});

export { textEditorEmit };
