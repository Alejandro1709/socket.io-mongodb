import { loadNotes, onSelectedNote, onNewNote } from './socket.js';
import { appendNote, fillForm, onHandleSubmit, renderNotes } from './ui.js';

onNewNote(appendNote);

loadNotes(renderNotes);

onSelectedNote(fillForm);

const form = document.querySelector('#form');

form.addEventListener('submit', onHandleSubmit);
