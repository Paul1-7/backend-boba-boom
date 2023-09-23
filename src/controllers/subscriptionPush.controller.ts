import { NextFunction, Request, Response } from "express";
import { sequelize } from "~/db";
import { SubscriptionPushService } from "~/services";
import { PushNotificationI } from "..";

const pushNotificationService = new SubscriptionPushService();

export async function getListSubscriptions(request: Request, response: Response, next: NextFunction) {
  try {
    const data = await pushNotificationService.getList();
    return response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}

export async function subscribePush(request: Request, response: Response, next: NextFunction) {
  const transaction = await sequelize.transaction();
  try {
    const data = request.body as PushNotificationI;
    const isSubscribed = await pushNotificationService.getByIdUser(data.idUser);

    if (isSubscribed) {
      await pushNotificationService.update(isSubscribed.toJSON().id, data, { transaction });
    } else {
      await pushNotificationService.create(data, { transaction });
    }

    await transaction.commit();
    return response.status(201).json({ ok: true });
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
}

export async function deleteSubscription(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;

    await pushNotificationService.delete(id);

    return response.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
}
