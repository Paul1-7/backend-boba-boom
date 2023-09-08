import { Response } from "express";

interface ErrorHandlerStrategy {
  canHandle(error: Error): boolean;
  handle(error: Error, res: Response): void;
}

interface OrderI {
  id: string;
  customer: string;
  total: number;
}

interface RolI {
  id: string;
  name: string;
}

interface OrderDetailI {
  idOrder: string;
  idMenu: string;
  subtotal: number;
}

interface BobaOrderDetailI extends OrderDetailI {
  idShake: string;
  idBoba1: string;
  idBoba2?: string;
  idBoba3?: string;
}

interface WaffleOrderDetailI extends OrderDetailI {
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
