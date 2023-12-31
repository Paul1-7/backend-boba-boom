/* eslint-disable indent */
import { Table, Column, Model, DataType, BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { Menu } from "./Menu.model";
import { FlavourI } from "~/index";
import { BobaOrderDetail } from "./BobaOrderDetail.model";
import { WaffleOrderDetail } from "./WaffleeOrderDetail.model";

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

  @HasMany(() => BobaOrderDetail)
  bobaOrdersDetail: BobaOrderDetail[];

  @HasMany(() => WaffleOrderDetail)
  waffleOrdersDetail: WaffleOrderDetail[];
}
