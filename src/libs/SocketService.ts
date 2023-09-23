import { Server, Socket } from "socket.io";
import { SOCKETS_EVENTS } from "~/constants";
import { OrderService } from "~/services";

interface Notification {
  title: string;
  body: string;
}

class SocketService {
  private io: Server;

  constructor(io: Server) {
    this.io = io;
    this.initSocket();
  }

  private initSocket() {
    this.io.on(SOCKETS_EVENTS.CONNECTION, (socket: Socket) => {
      const emitOrders = async (notification?: Notification) => {
        const orderService = new OrderService();
        const data = await orderService.getList();
        this.io.emit(SOCKETS_EVENTS.ORDERS_LIST, data, notification);
      };
      emitOrders();

      socket.on(SOCKETS_EVENTS.ORDER_ADDED, () => {
        const notification = {
          title: "Boba boo",
          body: "Hay un nuevo pedido",
        };
        emitOrders();
      });

      socket.on(SOCKETS_EVENTS.ORDER_MODIFIED, () => {
        const notification = {
          title: "Boba boo",
          body: "Se ha modificado un pedido",
        };
        emitOrders();
      });

      socket.on(SOCKETS_EVENTS.ORDER_DELETE, () => {
        const notification = {
          title: "Boba boo",
          body: "Se ha cancelado un pedido",
        };
        emitOrders();
      });

      socket.on(SOCKETS_EVENTS.CHANGE_STATE, () => {
        const notification = {
          title: "Boba boo",
          body: "Un pedido cambio de estado pedido",
        };
        emitOrders();
      });

      socket.on(SOCKETS_EVENTS.DISCONNECT, () => {
        console.log("Cliente desconectado");
      });
    });
  }
}

export default SocketService;
