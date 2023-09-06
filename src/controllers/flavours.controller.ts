import { NextFunction, Request, Response } from "express";
import { responseMessage } from "~/constants";
import { sequelize } from "~/db";
import { FlavourService } from "~/services";
import { ErrorResponse, buildSequelizeOptions } from "~/utils";

const flavourService = new FlavourService();

export async function getListFlavours(request: Request, response: Response, next: NextFunction) {
  try {
    const { query } = request;
    let sequelizeOptions = {};

    if (query) {
      sequelizeOptions = buildSequelizeOptions(query);
    }

    const data = await flavourService.getList(sequelizeOptions);
    return response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}

export async function getFlavourById(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const flavour = await flavourService.getById(id);

    if (!flavour) {
      throw ErrorResponse.notFound(responseMessage.notFound);
    }

    return response.status(200).json({ data: flavour });
  } catch (error) {
    next(error);
  }
}

export async function addFlavour(request: Request, response: Response, next: NextFunction) {
  const transaction = await sequelize.transaction();
  try {
    const { body } = request;

    await flavourService.create(body, { transaction });

    await transaction.commit();
    return response.status(201).json({ message: responseMessage.flavour.addSuccess });
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
}

export async function updateFlavour(request: Request, response: Response, next: NextFunction) {
  try {
    const data = request.body;
    const { id } = request.params;

    await flavourService.update(id, data);

    return response.status(200).json({ message: responseMessage.flavour.updateSuccess });
  } catch (error) {
    next(error);
  }
}

export async function deleteFlavour(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;

    await flavourService.delete(id);

    return response.status(200).json({ message: responseMessage.flavour.deleteSuccess });
  } catch (error) {
    next(error);
  }
}
