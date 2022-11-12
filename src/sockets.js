import Note from './models/note';

export default (io) => {
  io.on("connection", socket => {
   
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit("server:loadnotes", notes);
    }

    emitNotes();

    socket.on("client:newnote", async (note) => {
      const newNote = new Note(note)
      const savedNote = await newNote.save()
      socket.emit('server:newnote', savedNote)
    })
  })
}