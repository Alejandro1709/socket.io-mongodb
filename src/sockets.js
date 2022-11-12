export default (io) => {
  io.on("connection", socket => {
    console.log("New user connected", socket.handshake)
    socket.on("disconnect", () => console.log("User disconnected"))
  })
}