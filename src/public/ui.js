import { saveNote } from './socket.js';

const list = document.querySelector('#list');

const noteUi = (note) => {
  const newEl = document.createElement('li');

  newEl.innerHTML += `
      <div class="note">
        <div class="note-details">
          <h2>${note.title}</h2>
          <p>${note.description}</p>
        </div>
        <div class="note-btns">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    `;
  return newEl;
};

export const renderNotes = (notes) => {
  notes.forEach((note) => list.append(noteUi(note)));
};

export const onHandleSubmit = (e) => {
  e.preventDefault();

  const input = document.querySelector('#title');
  const desc = document.querySelector('#description');

  saveNote(input.value, desc.value);
};

export const appendNote = (note) => {
  list.append(noteUi(note));
};
