import { NextFunction, Request, Response } from "express";
import { MenuService } from "~/services";

const menuService = new MenuService();

export async function getListMenus(request: Request, response: Response, next: NextFunction) {
  try {
    const data = await menuService.getList();
    return response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}
