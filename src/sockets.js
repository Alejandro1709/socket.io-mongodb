import Note from './models/note';

export default (io) => {
  io.on('connection', (socket) => {
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit('server:loadnotes', notes);
    };

    emitNotes();

    socket.on('client:newnote', async (note) => {
      const newNote = new Note(note);
      const savedNote = await newNote.save();
      io.emit('server:newnote', savedNote);
    });

    socket.on('client:getnote', async (id) => {
      const note = await Note.findById(id);
      io.emit('server:selectednote', note);
    });

    socket.on('client:updatenote', async (id, title, description) => {
      await Note.findByIdAndUpdate(
        id,
        { title, description },
        { new: true, runValidators: true }
      );
      emitNotes();
    });

    socket.on('client:deletenote', async (id) => {
      await Note.findByIdAndDelete(id);
      emitNotes();
    });
  });
};
