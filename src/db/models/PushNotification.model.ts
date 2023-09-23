/* eslint-disable indent */
import { Table, Column, Model, DataType } from "sequelize-typescript";
import { PushNotificationI } from "~/index";

@Table({ tableName: "pushNotifications" })
export class PushNotification extends Model implements PushNotificationI {
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
  token: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  idUser: string;
}
