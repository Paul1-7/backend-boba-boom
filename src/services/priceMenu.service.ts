import { CreateOptions, FindOptions } from "sequelize";
import { PriceMenu } from "~/db/models";

export class PriceMenuService {
  async getListById(id: string, options?: FindOptions): Promise<PriceMenu[]> {
    return await PriceMenu.findAll({
      where: { id },
      ...options,
    });
  }

  async getById(id: string, options?: FindOptions): Promise<PriceMenu | null> {
    return await PriceMenu.findByPk(id, {
      ...options,
    });
  }

  async create(data: PriceMenu, options?: CreateOptions): Promise<PriceMenu> {
    return await PriceMenu.create({ ...data }, options);
  }

  async update(id: string, data: Partial<PriceMenu>, options?: FindOptions): Promise<boolean> {
    const result = await PriceMenu.update(data, { where: { id }, ...options });

    return result[0] > 0;
  }

  async delete(id: string, options?: FindOptions): Promise<boolean> {
    const result = await PriceMenu.destroy({ where: { id }, ...options });
    return result[0] > 0;
  }
}
