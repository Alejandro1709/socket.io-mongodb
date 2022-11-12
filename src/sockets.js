import Note from './models/note';

export default (io) => {
  io.on("connection", socket => {
   
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit("loadnotes", notes);
    }

    emitNotes();

    socket.on("newnote", async (note) => {
      const newNote = new Note(note)
      const savedNote = await newNote.save()
      console.log(savedNote)
    })
  })
}