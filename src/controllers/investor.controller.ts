import { NextFunction, Request, Response } from "express";
import { msgToResponse } from "~/constants";
import { OrderService } from "~/services";
import { ErrorResponse } from "~/utils";

const investorService = new OrderService();

export async function getListInvestors(request: Request, response: Response, next: NextFunction) {
  try {
    const rols = await investorService.getList();
    return response.status(200).json({ data: rols });
  } catch (error) {
    next(error);
  }
}

export async function getInvestorById(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const bank = await investorService.getById(id);

    if (!bank) {
      throw ErrorResponse.notFound(msgToResponse.notFound);
    }

    return response.status(200).json({ data: bank });
  } catch (error) {
    next(error);
  }
}

export async function addInvestor(request: Request, response: Response, next: NextFunction) {
  try {
    const data = request.body;
    await investorService.create(data);

    return response.status(201).json({ message: msgToResponse.project.addSuccess });
  } catch (error) {
    next(error);
  }
}

export async function updateInvestor(request: Request, response: Response, next: NextFunction) {
  try {
    const data = request.body;
    const { id } = request.params;

    await investorService.update(id, data);

    return response.status(200).json({ message: msgToResponse.project.updateSuccess });
  } catch (error) {
    next(error);
  }
}

export async function deleteInvestor(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;

    await investorService.delete(id);

    return response.status(200).json({ message: msgToResponse.project.deleteSuccess });
  } catch (error) {
    next(error);
  }
}
