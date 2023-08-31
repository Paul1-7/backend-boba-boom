import { NextFunction, Request, Response } from "express";
import { SOCKETS_EVENTS, responseMessage } from "~/constants";
import { socketService } from "~/server";
import { OrderService } from "~/services";
import { ErrorResponse } from "~/utils";

const orderService = new OrderService();

export async function getListOrders(request: Request, response: Response, next: NextFunction) {
  try {
    const data = await orderService.getList();

    socketService.broadcastEvent(SOCKETS_EVENTS.ORDERS_LIST, data);
    return response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}

export async function getOrderById(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const data = await orderService.getById(id);

    if (!data) {
      throw ErrorResponse.notFound(responseMessage.notFound);
    }

    return response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}

export async function addOrder(request: Request, response: Response, next: NextFunction) {
  try {
    const data = request.body;
    await orderService.create(data);

    return response.status(201).json({ message: responseMessage.order.addSuccess });
  } catch (error) {
    next(error);
  }
}

export async function updateOrder(request: Request, response: Response, next: NextFunction) {
  try {
    const data = request.body;
    const { id } = request.params;

    await orderService.update(id, data);

    return response.status(200).json({ message: responseMessage.order.updateSuccess });
  } catch (error) {
    next(error);
  }
}

export async function deleteOrder(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;

    await orderService.delete(id);

    return response.status(200).json({ message: responseMessage.order.deleteSuccess });
  } catch (error) {
    next(error);
  }
}
