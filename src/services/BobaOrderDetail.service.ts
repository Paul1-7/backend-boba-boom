import { CreateOptions, FindOptions } from "sequelize";
import { BobaOrderDetail } from "~/db/models";

export class BobaOrderService {
  async create(data: { [x: string]: unknown }[], options?: CreateOptions): Promise<BobaOrderDetail[]> {
    return await BobaOrderDetail.bulkCreate(data, options);
  }

  async update(idOrder: string, data: { [x: string]: unknown }[], options?: FindOptions): Promise<void> {
    await this.delete(idOrder, options);
    await this.create(data, options);
  }

  async delete(idOrder: string, options?: FindOptions): Promise<boolean> {
    const result = await BobaOrderDetail.destroy({ where: { idOrder }, ...options });
    return result[0] > 0;
  }
}
