const socket = io()

socket.on("loadnotes", notes => {
  console.log(notes)
})