import { CreateOptions, FindOptions } from "sequelize";
import { Flavour, Order } from "~/db/models";
import { OrderI } from "..";

export class OrderService {
  async getList(options?: FindOptions): Promise<OrderI[]> {
    return await Order.findAll(options);
  }

  async getById(id: string, options?: FindOptions): Promise<OrderI | null> {
    return await Order.findByPk(id, {
      include: [
        {
          model: Flavour,
          as: "shakeFlavour",
        },
      ],
      ...options,
    });
  }

  async create(data: OrderI, options?: CreateOptions): Promise<OrderI> {
    return await Order.create({ ...data }, options);
  }

  async update(id: string, data: Partial<OrderI>, options?: FindOptions): Promise<boolean> {
    const result = await Order.update(data, { where: { id }, ...options });
    return result[0] > 0;
  }

  async delete(id: string, options?: FindOptions): Promise<boolean> {
    const result = await Order.destroy({ where: { id }, ...options });
    return result[0] > 0;
  }
}
