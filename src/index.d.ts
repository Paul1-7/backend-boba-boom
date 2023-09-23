import { Response } from "express";

interface ErrorHandlerStrategy {
  canHandle(error: Error): boolean;
  handle(error: Error, res: Response): void;
}

interface OrderI {
  id: string;
  customer: string;
  total: number;
  state: string;
}

interface RolI {
  id: string;
  name: string;
}

interface OrderDetailI {
  idOrder: string;
  idMenu: string;
  idPrice?: string;
}

interface BobaOrderDetailI extends OrderDetailI {
  id?: string;
  idShake: string;
  idBoba1: string;
  idBoba2?: string;
  idBoba3?: string;
}

interface WaffleOrderDetailI extends OrderDetailI {
  id?: string;
  idFruit: string;
  idCoating: string;
  idTopping?: string;
}

interface FlavourI {
  id: string;
  type: string;
  name: string;
  idMenu: string;
  price: number;
}

interface MenuI {
  id: string;
  name: string;
}

interface PriceMenuI {
  id: string;
  idMenu: string;
  price: number;
}

interface UserI {
  id: string;
  user: string;
  password: string;
  idRol: string;
}

interface RolI {
  id: string;
  name: string;
}

interface PushNotificationI {
  id: string;
  token: string;
  idUser: string;
}
