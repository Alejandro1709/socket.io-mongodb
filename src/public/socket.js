const socket = io();

export const loadNotes = (cb) => {
  socket.on('server:loadnotes', cb);
};

export const saveNote = (title, description) => {
  socket.emit('client:newnote', { title, description });
};

export const onNewNote = (cb) => {
  socket.on('server:newnote', cb);
};

export const deleteNote = (id) => {
  socket.emit('client:deletenote', id);
};

export const getNoteById = (id) => {
  socket.emit('client:getnote', id);
};

export const onSelectedNote = (cb) => {
  socket.on('server:selectednote', cb);
};

export const updateNote = (id, title, description) => {
  socket.emit('client:updatenote', id, title, description);
};
