import { NextFunction, Request, Response } from "express";
import { RolService } from "~/services";

const rolService = new RolService();

export async function getListRols(request: Request, response: Response, next: NextFunction) {
  try {
    const data = await rolService.getList();
    return response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}
