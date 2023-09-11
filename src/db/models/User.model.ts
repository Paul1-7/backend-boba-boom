/* eslint-disable indent */
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { UserI } from "~/index";
import { Rol } from "./Rol.model";

@Table({ tableName: "users" })
export class User extends Model implements UserI {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  user: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  password: string;

  @ForeignKey(() => Rol)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  idRol: string;

  @BelongsTo(() => Rol)
  rol: Rol;
}
