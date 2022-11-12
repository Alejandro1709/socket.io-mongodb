const socket = io()

const list = document.querySelector('#list')

export const loadNotes = () => {
  socket.on("loadnotes", notes => {
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
  })
}

export const saveNote = (title, description) => {
  socket.emit("newnote", { title, description })
}