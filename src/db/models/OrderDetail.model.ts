/* eslint-disable indent */
import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Menu } from "./Menu.model";
import { Flavour } from "./Flavour.model";
import { Order } from "./Order.model";
import { OrderDetailI } from "~/index";

@Table({ tableName: "ordersDetail" })
export class OrderDetail extends Model implements OrderDetailI {
  @ForeignKey(() => Order)
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  idOrder: string;

  @ForeignKey(() => Flavour)
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  idFlavour: string;

  @ForeignKey(() => Menu)
  @Column({
    primaryKey: true,
    type: DataType.TEXT,
    allowNull: false,
  })
  idMenu: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  subtotal: number;

  @BelongsTo(() => Menu)
  menu: Menu;
  @BelongsTo(() => Flavour)
  flavour: Flavour;
  @BelongsTo(() => Order)
  order: Order;
}
