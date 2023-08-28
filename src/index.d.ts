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

interface OrderDetailI {
  idOrder: string;
  idFlavour: string;
  idMenu: string;
  subtotal: number;
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
