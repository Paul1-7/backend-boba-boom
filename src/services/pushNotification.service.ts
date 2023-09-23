import { CreateOptions, FindOptions } from "sequelize";
import { PushNotification } from "~/db/models";
import { PushNotificationI } from "..";

export class SubscriptionPushService {
  async getList(options?: FindOptions): Promise<PushNotification[]> {
    return await PushNotification.findAll({
      ...options,
    });
  }

  async getByIdUser(idUser: string, options?: FindOptions): Promise<PushNotification | null> {
    return await PushNotification.findOne({
      where: {
        idUser,
      },
      ...options,
    });
  }

  async create(data: PushNotificationI, options?: CreateOptions): Promise<PushNotification> {
    return await PushNotification.create({ ...data }, options);
  }

  async update(id: string, data: Partial<PushNotification>, options?: FindOptions): Promise<boolean> {
    const result = await PushNotification.update(data, { where: { id }, ...options });

    return result[0] > 0;
  }

  async delete(id: string, options?: FindOptions): Promise<boolean> {
    const result = await PushNotification.destroy({ where: { id }, ...options });
    return result[0] > 0;
  }
}
