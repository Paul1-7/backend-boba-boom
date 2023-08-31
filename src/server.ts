import { createServer } from "http";
import app from "./app";
import { CONFIG } from "./config";
import DBInit from "./db";
import { Server } from "socket.io";
import { SocketService } from "./libs";

const { PORT } = CONFIG;

DBInit()
  .then(() => {
    console.log("Database conected");
  })
  .catch(() => {
    console.log("Database not conected");
  });

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

export const socketService = new SocketService(io);

server.listen(PORT, () => {
  console.log("Servidor en http://localhost:" + PORT);
});
