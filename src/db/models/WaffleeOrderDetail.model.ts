/* eslint-disable indent */
import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Menu } from "./Menu.model";
import { Flavour } from "./Flavour.model";
import { Order } from "./Order.model";
import { WaffleOrderDetailI } from "~/index";

@Table({ tableName: "wafflesOrdersDetail" })
export class WaffleOrderDetail extends Model implements WaffleOrderDetailI {
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
  idFruit: string;

  @ForeignKey(() => Flavour)
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  idCoating: string;

  @ForeignKey(() => Flavour)
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  idTopping: string;

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

  @BelongsTo(() => Order)
  order: Order;

  @BelongsTo(() => Flavour, "idFruit")
  fruitFlavour: Flavour;

  @BelongsTo(() => Flavour, "idCoating")
  coatingFlavour: Flavour;

  @BelongsTo(() => Flavour, "idTopping")
  toppingFlavour: Flavour;
}
