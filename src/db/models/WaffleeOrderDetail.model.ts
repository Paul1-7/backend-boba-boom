/* eslint-disable indent */
import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Menu } from "./Menu.model";
import { Flavour } from "./Flavour.model";
import { Order } from "./Order.model";
import { WaffleOrderDetailI } from "~/index";

@Table({ tableName: "wafflesOrdersDetail" })
export class WaffleOrderDetail extends Model implements WaffleOrderDetailI {
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
  idFruit: string;

  @ForeignKey(() => Flavour)
  @Column({
    type: DataType.UUID,
  })
  idCoating: string;

  @ForeignKey(() => Flavour)
  @Column({
    type: DataType.UUID,
  })
  idTopping: string;

  @ForeignKey(() => Menu)
  @Column({
    type: DataType.UUID,
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

  @BelongsTo(() => Flavour, "idFruit")
  fruitFlavour: Flavour;

  @BelongsTo(() => Flavour, "idCoating")
  coatingFlavour: Flavour;

  @BelongsTo(() => Flavour, "idTopping")
  toppingFlavour: Flavour;
}
