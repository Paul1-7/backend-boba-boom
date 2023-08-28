/* eslint-disable indent */
import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Menu } from "./Menu.model";
import { PriceMenuI } from "~/index";

@Table({ tableName: "pricesMenus" })
export class PriceMenu extends Model implements PriceMenuI {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  id: string;

  @ForeignKey(() => Menu)
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  idMenu: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  price: number;

  @BelongsTo(() => Menu)
  menu: Menu;
}
