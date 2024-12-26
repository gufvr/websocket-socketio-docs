import { textEditorEmit } from './socket-front.js';

const textEditor = document.getElementById('editor-texto');

textEditor.addEventListener('keyup', () => {
  textEditorEmit(textEditor.value);
});

function textEditorUpdate(text) {
  textEditor.value = text;
}

export { textEditorUpdate };
