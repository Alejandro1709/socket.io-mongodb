const socket = io()

export const loadNotes = (cb) => {
  socket.on("server:loadnotes", cb)
}

export const saveNote = (title, description) => {
  socket.emit("client:newnote", { title, description })
}