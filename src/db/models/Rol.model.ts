/* eslint-disable indent */
import { Table, Column, Model, DataType } from "sequelize-typescript";
import { RolI } from "~/index";

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
}
