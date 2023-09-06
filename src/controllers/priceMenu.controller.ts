import { NextFunction, Request, Response } from "express";
import { PriceMenuService } from "~/services";

const priceMenuService = new PriceMenuService();

export async function getListPricesMenuById(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const data = await priceMenuService.getListById(id);
    return response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}
