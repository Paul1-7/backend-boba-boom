/* eslint-disable indent */
import { Table, Column, Model, DataType } from "sequelize-typescript";
import { OrderI } from "~/index";

@Table({ tableName: "orders" })
export class Order extends Model implements OrderI {
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
  customer: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  total: number;
}
