import { Server, Socket } from "socket.io";
import { SOCKETS_EVENTS } from "~/constants";

class SocketService {
  private io: Server;

  constructor(io: Server) {
    this.io = io;
    this.initSocket();
  }

  private initSocket() {
    this.io.on(SOCKETS_EVENTS.CONNECTION, (socket: Socket) => {
      console.log("Nuevo cliente conectado");

      socket.on(SOCKETS_EVENTS.DISCONNECT, () => {
        console.log("Cliente desconectado");
      });
    });
  }

  emitEvent(event: string, data: unknown) {
    this.io.emit(event, data);
  }

  broadcastEvent(event: string, data: unknown) {
    this.io.emit(event, data);
  }

  emitEventToUser(userId: string, event: string, data: unknown) {
    this.io.to(userId).emit(event, data);
  }
}

export default SocketService;
