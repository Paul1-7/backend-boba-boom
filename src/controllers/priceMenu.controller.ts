import { NextFunction, Request, Response } from "express";
import { PriceMenuService } from "~/services";

const priceMenuService = new PriceMenuService();

export async function getListPricesMenu(request: Request, response: Response, next: NextFunction) {
  try {
    const data = await priceMenuService.getList();
    return response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}
