import { CreateOptions, FindOptions } from "sequelize";
import { User } from "~/db/models";

export class UserService {
  async getList(options?: FindOptions): Promise<User[]> {
    return await User.findAll({
      ...options,
    });
  }

  async getById(id: string, options?: FindOptions): Promise<User | null> {
    return await User.findByPk(id, {
      ...options,
    });
  }

  async create(data: User, options?: CreateOptions): Promise<User> {
    return await User.create({ ...data }, options);
  }

  async update(id: string, data: Partial<User>, options?: FindOptions): Promise<boolean> {
    const result = await User.update(data, { where: { id }, ...options });

    return result[0] > 0;
  }

  async delete(id: string, options?: FindOptions): Promise<boolean> {
    const result = await User.destroy({ where: { id }, ...options });
    return result[0] > 0;
  }
}
