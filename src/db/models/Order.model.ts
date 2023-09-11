/* eslint-disable indent */
import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { OrderStates } from "~/constants";
import { OrderI } from "~/index";
import { WaffleOrderDetail } from "./WaffleeOrderDetail.model";
import { BobaOrderDetail } from "./BobaOrderDetail.model";

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
    type: DataType.TEXT,
    allowNull: false,
    defaultValue: OrderStates.ON_STANDBY,
  })
  state: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  total: number;

  @HasMany(() => WaffleOrderDetail)
  waffleesDetail: WaffleOrderDetail[];

  @HasMany(() => BobaOrderDetail)
  bobasDetail: BobaOrderDetail[];
}
