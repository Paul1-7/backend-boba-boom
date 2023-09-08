/* eslint-disable indent */
import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Menu } from "./Menu.model";
import { Flavour } from "./Flavour.model";
import { Order } from "./Order.model";
import { BobaOrderDetailI } from "~/index";

@Table({ tableName: "bobasOrdersDetail" })
export class BobaOrderDetail extends Model implements BobaOrderDetailI {
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
  idShake: string;

  @ForeignKey(() => Flavour)
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  idBoba1: string;

  @ForeignKey(() => Flavour)
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  idBoba2: string;

  @ForeignKey(() => Flavour)
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  idBoba3: string;

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

  @BelongsTo(() => Flavour, "idShake")
  shakeFlavour: Flavour;

  @BelongsTo(() => Flavour, "idBoba1")
  boba1Flavour: Flavour;

  @BelongsTo(() => Flavour, "idBoba2")
  boba2Flavour: Flavour;

  @BelongsTo(() => Flavour, "idBoba3")
  boba3Flavour: Flavour;
}
