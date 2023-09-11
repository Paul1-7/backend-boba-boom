import { Server, Socket } from "socket.io";
import { SOCKETS_EVENTS } from "~/constants";
import { OrderService } from "~/services";

class SocketService {
  private io: Server;

  constructor(io: Server) {
    this.io = io;
    this.initSocket();
  }

  private initSocket() {
    this.io.on(SOCKETS_EVENTS.CONNECTION, (socket: Socket) => {
      const emitOrders = async () => {
        const orderService = new OrderService();
        const data = await orderService.getList();
        this.io.emit(SOCKETS_EVENTS.ORDERS_LIST, data);
      };
      emitOrders();

      socket.on(SOCKETS_EVENTS.ORDER_ADDED, () => {
        emitOrders();
      });

      socket.on(SOCKETS_EVENTS.ORDER_MODIFIED, () => {
        emitOrders();
      });

      socket.on(SOCKETS_EVENTS.ORDER_DELETE, () => {
        emitOrders();
      });

      socket.on(SOCKETS_EVENTS.CHANGE_STATE, () => {
        emitOrders();
      });

      socket.on(SOCKETS_EVENTS.DISCONNECT, () => {
        console.log("Cliente desconectado");
      });
    });
  }
}

export default SocketService;
