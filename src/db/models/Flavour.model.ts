/* eslint-disable indent */
import { Table, Column, Model, DataType, BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { Menu } from "./Menu.model";
import { OrderDetail } from "./OrderDetail.model";
import { FlavourI } from "~/index";

@Table({ tableName: "flavours" })
export class Flavour extends Model implements FlavourI {
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
  type: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => Menu)
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  idMenu: string;

  @BelongsTo(() => Menu)
  menu: Menu;

  @HasMany(() => OrderDetail)
  ordersDetail: OrderDetail[];
}
