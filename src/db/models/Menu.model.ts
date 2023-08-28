/* eslint-disable indent */
import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { PriceMenu } from "./PriceMenu.model";
import { OrderDetail } from "./OrderDetail.model";
import { MenuI } from "~/index";

@Table({ tableName: "menus" })
export class Menu extends Model implements MenuI {
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

  @HasMany(() => PriceMenu)
  priceMenu: PriceMenu[];

  @HasMany(() => OrderDetail)
  orderDetail: OrderDetail[];
}
