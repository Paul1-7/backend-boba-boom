import { CreateOptions, FindOptions, Model } from "sequelize";
import { BobaOrderDetail, Flavour, Order, WaffleOrderDetail } from "~/db/models";
import { OrderI } from "..";

export class OrderService {
  async getList(options?: FindOptions): Promise<OrderI[]> {
    return await Order.findAll({ order: [["createdAt", "DESC"]], ...options });
  }

  async getById(id: string, options?: FindOptions): Promise<OrderI | null> {
    return await Order.findByPk(id, {
      include: [
        {
          model: WaffleOrderDetail,
          as: "waffleesDetail",
          include: [
            {
              model: Flavour,
              as: "fruitFlavour",
              attributes: ["id", "name", "price"],
            },
            {
              model: Flavour,
              as: "coatingFlavour",
              attributes: ["id", "name", "price"],
            },
            {
              model: Flavour,
              as: "toppingFlavour",
              attributes: ["id", "name", "price"],
            },
          ],
        },
        {
          model: BobaOrderDetail,
          as: "bobasDetail",
          include: [
            {
              model: Flavour,
              as: "shakeFlavour",
              attributes: ["id", "name", "price"],
            },
            {
              model: Flavour,
              as: "boba1Flavour",
              attributes: ["id", "name", "price"],
            },
            {
              model: Flavour,
              as: "boba2Flavour",
              attributes: ["id", "name", "price"],
            },
            {
              model: Flavour,
              as: "boba3Flavour",
              attributes: ["id", "name", "price"],
            },
          ],
        },
      ],
      ...options,
    });
  }

  async create(data: OrderI, options?: CreateOptions): Promise<Model<OrderI>> {
    return await Order.create({ ...data }, options);
  }

  async update(id: string, data: Partial<OrderI>, options?: FindOptions): Promise<boolean> {
    const result = await Order.update(data, { where: { id }, ...options });
    return result[0] > 0;
  }

  async delete(id: string, data: Partial<OrderI>, options?: FindOptions): Promise<boolean> {
    const result = await Order.update(data, { where: { id }, ...options });
    return result[0] > 0;
  }
}
