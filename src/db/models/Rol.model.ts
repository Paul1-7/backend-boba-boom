/* eslint-disable indent */
import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { RolI } from "~/index";
import { User } from "./User.model";

@Table({ tableName: "rols" })
export class Rol extends Model implements RolI {
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
  name: string;

  @HasMany(() => User)
  users: User[];
}
