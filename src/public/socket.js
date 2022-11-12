const socket = io()

const list = document.querySelector('#list')

export const loadNotes = () => {
  socket.on("loadnotes", notes => {
    notes.forEach(note => {
      const newEl = document.createElement('li')

      newEl.innerHTML = `
        <div class="note">
          <h2>${note.title}</h2>
          <p>${note.description}</p>
        </div>
      `

      list.appendChild(newEl)
    });
  })
}

export const saveNote = (title, description) => {
  socket.emit("newnote", { title, description })
}