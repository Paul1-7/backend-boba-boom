/* eslint-disable indent */
import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Menu } from "./Menu.model";
import { Flavour } from "./Flavour.model";
import { Order } from "./Order.model";
import { BobaOrderDetailI } from "~/index";

@Table({ tableName: "bobasOrdersDetail" })
export class BobaOrderDetail extends Model implements BobaOrderDetailI {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  id: string;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.UUID,
  })
  idOrder: string;

  @ForeignKey(() => Flavour)
  @Column({
    type: DataType.UUID,
  })
  idShake: string;

  @ForeignKey(() => Flavour)
  @Column({
    type: DataType.UUID,
  })
  idBoba1: string;

  @ForeignKey(() => Flavour)
  @Column({
    type: DataType.UUID,
  })
  idBoba2: string;

  @ForeignKey(() => Flavour)
  @Column({
    type: DataType.UUID,
  })
  idBoba3: string;

  @ForeignKey(() => Menu)
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  idMenu: string;

  @Column({
    type: DataType.UUID,
  })
  idPrice: string;

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
