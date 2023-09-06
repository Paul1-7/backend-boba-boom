import { FindOptions } from "sequelize";
import { Menu } from "~/db/models";
import { MenuI } from "..";

export class MenuService {
  async getList(options?: FindOptions): Promise<MenuI[]> {
    return await Menu.findAll(options);
  }
}
