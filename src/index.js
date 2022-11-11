import app from "./app";
import { Server as WebSocketServer } from 'socket.io'
import http from 'http'

const server = http.createServer(app)
const httpServer = server.listen(3000)
const io = new WebSocketServer(httpServer)

console.log("Server listening on port 3000");