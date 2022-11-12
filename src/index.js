import app from "./app";
import { Server as WebSocketServer } from "socket.io"
import { connectDb } from "./db";
import http from "http"
import sockets from "./sockets"

connectDb()

const server = http.createServer(app)
const httpServer = server.listen(3000)

console.log("Server listening on port 3000")

const io = new WebSocketServer(httpServer)

sockets(io)