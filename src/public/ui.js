import { saveNote } from "./socket.js"

export const renderNotes = (notes) => {
  notes.forEach(note => {
    const newEl = document.createElement('li')

    newEl.innerHTML = `
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
    `

    list.appendChild(newEl)
  });
}

export const onHandleSubmit = e => {
  e.preventDefault()

  const input = document.querySelector("#title")
  const desc = document.querySelector("#description")

  saveNote(input.value, desc.value)
}