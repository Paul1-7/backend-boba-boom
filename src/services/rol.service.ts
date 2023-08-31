import { FindOptions } from "sequelize";
import { Rol } from "~/db/models";
import { RolI } from "..";

export class RolService {
  async getList(options?: FindOptions): Promise<RolI[]> {
    return await Rol.findAll(options);
  }
}
