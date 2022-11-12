import { loadNotes, onNewNote } from './socket.js';
import { appendNote, onHandleSubmit, renderNotes } from './ui.js';

onNewNote(appendNote);

loadNotes(renderNotes);

const form = document.querySelector('#form');

form.addEventListener('submit', onHandleSubmit);
