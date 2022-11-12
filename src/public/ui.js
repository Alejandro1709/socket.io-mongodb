import { saveNote, getNoteById, deleteNote, updateNote } from './socket.js';

const list = document.querySelector('#list');

const input = document.querySelector('#title');
const desc = document.querySelector('#description');
const button = document.querySelector('#submit-btn');

let isEditingNote = false;
let postId = '';

const noteUi = (note) => {
  const newEl = document.createElement('li');

  newEl.dataset.id = note._id;

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

  const deleteBtn = newEl.querySelector('.delete-btn');
  const editBtn = newEl.querySelector('.edit-btn');

  deleteBtn.addEventListener('click', (e) => {
    const postEl = e.target.closest('li');
    const postId = postEl.dataset.id;
    deleteNote(postId);
  });

  editBtn.addEventListener('click', (e) => {
    const postEl = e.target.closest('li');
    const postId = postEl.dataset.id;
    getNoteById(postId);
  });

  return newEl;
};

export const renderNotes = (notes) => {
  list.innerHTML = '';
  notes.forEach((note) => list.append(noteUi(note)));
};

export const fillForm = (note) => {
  input.value = note.title;
  desc.value = note.description;
  button.textContent = 'Update Post';
  postId = note._id;
  isEditingNote = true;
};

export const onHandleSubmit = (e) => {
  e.preventDefault();

  if (isEditingNote) {
    updateNote(postId, input.value, desc.value);
  } else {
    saveNote(input.value, desc.value);
  }
};

export const appendNote = (note) => {
  list.append(noteUi(note));
};
