import { CreateOptions, FindOptions } from "sequelize";
import { Flavour } from "~/db/models";

export class FlavourService {
  async getList(options?: FindOptions): Promise<Flavour[]> {
    return await Flavour.findAll({
      ...options,
    });
  }

  async getById(id: string, options?: FindOptions): Promise<Flavour | null> {
    return await Flavour.findByPk(id, {
      ...options,
    });
  }

  async create(data: Flavour, options?: CreateOptions): Promise<Flavour> {
    return await Flavour.create({ ...data }, options);
  }

  async update(id: string, data: Partial<Flavour>, options?: FindOptions): Promise<boolean> {
    const result = await Flavour.update(data, { where: { id }, ...options });

    return result[0] > 0;
  }

  async delete(id: string, options?: FindOptions): Promise<boolean> {
    const result = await Flavour.destroy({ where: { id }, ...options });
    return result[0] > 0;
  }
}
