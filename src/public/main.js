import { loadNotes, onNewNote } from './socket.js';
import { onHandleSubmit, renderNotes } from './ui.js';

onNewNote();

loadNotes(renderNotes);

const form = document.querySelector('#form');

form.addEventListener('submit', onHandleSubmit);
