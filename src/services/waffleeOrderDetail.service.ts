import { CreateOptions, FindOptions } from "sequelize";
import { WaffleOrderDetail } from "~/db/models";

export class WaffleeOrderService {
  async create(data: { [x: string]: unknown }[], options?: CreateOptions): Promise<WaffleOrderDetail[]> {
    return await WaffleOrderDetail.bulkCreate(data, options);
  }

  async update(idOrder: string, data: { [x: string]: unknown }[], options?: FindOptions): Promise<void> {
    await this.delete(idOrder, options);
    await this.create(data, options);
  }

  async delete(idOrder: string, options?: FindOptions): Promise<boolean> {
    const result = await WaffleOrderDetail.destroy({ where: { idOrder }, ...options });
    return result[0] > 0;
  }
}
