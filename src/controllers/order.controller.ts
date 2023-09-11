import { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import { OrderStates, responseMessage } from "~/constants";
import { sequelize } from "~/db";
import { BobaOrderService, OrderService, WaffleeOrderService } from "~/services";
import { ErrorResponse } from "~/utils";

const orderService = new OrderService();
const bobaOrderService = new BobaOrderService();
const waffleeOrderService = new WaffleeOrderService();

const BOBA_ID = "84280cbb-57c2-4806-a3ea-7f81848efdbf";
const WAFFLEE_ID = "369bf017-c1e5-4e5c-98ae-1185b21e53bf";

export async function getListOrders(request: Request, response: Response, next: NextFunction) {
  try {
    const { start, end } = request.query;
    const sequelizeOptions = {
      where: {
        createdAt: {
          [Op.between]: [start, end],
        },
        state: OrderStates.COMPLETE,
      },
    };

    const data = start && end ? await orderService.getList(sequelizeOptions) : await orderService.getList();

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
  const transaction = await sequelize.transaction();
  try {
    const { order, bobaDetail, waffleeDetail } = request.body;

    const addedOrder = await orderService.create(order, { transaction });

    const dataBobaDetail = bobaDetail.map((bobaDetail) => ({
      idOrder: addedOrder.toJSON().id,
      idMenu: BOBA_ID,
      ...bobaDetail,
    }));

    await bobaOrderService.create(dataBobaDetail, { transaction });

    const dataWaffleeDetail = waffleeDetail.map((waffleeDetail) => ({
      idOrder: addedOrder.toJSON().id,
      idMenu: WAFFLEE_ID,
      ...waffleeDetail,
    }));

    await waffleeOrderService.create(dataWaffleeDetail, { transaction });
    await transaction.commit();
    return response.status(201).json({ message: responseMessage.order.addSuccess });
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
}

export async function updateOrder(request: Request, response: Response, next: NextFunction) {
  const transaction = await sequelize.transaction();
  try {
    const { id } = request.params;
    const { order, bobaDetail, waffleeDetail } = request.body;

    await orderService.update(id, { ...order, state: OrderStates.MODIFY }, { transaction });

    const dataBobaDetail = bobaDetail.map((bobaDetail) => ({
      idOrder: id,
      idMenu: BOBA_ID,
      ...bobaDetail,
    }));

    await bobaOrderService.update(id, dataBobaDetail, { transaction });

    const dataWaffleeDetail = waffleeDetail.map((waffleeDetail) => ({
      idOrder: id,
      idMenu: WAFFLEE_ID,
      ...waffleeDetail,
    }));

    await waffleeOrderService.update(id, dataWaffleeDetail, { transaction });
    await transaction.commit();

    return response.status(200).json({ message: responseMessage.order.updateSuccess });
  } catch (error) {
    next(error);
  }
}

export async function deleteOrder(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;

    await orderService.delete(id, { state: OrderStates.CANCEL });

    return response.status(200).json({ message: responseMessage.order.deleteSuccess });
  } catch (error) {
    next(error);
  }
}

export async function changeStateOrder(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const { body } = request;

    await orderService.update(id, { state: body.state });

    return response.status(200).json({ message: responseMessage.order.changeState });
  } catch (error) {
    next(error);
  }
}
