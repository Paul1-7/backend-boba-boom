import { hash } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { responseMessage } from "~/constants";
import { sequelize } from "~/db";
import { UserService } from "~/services";
import { ErrorResponse } from "~/utils";

const userService = new UserService();

export async function getListUsers(request: Request, response: Response, next: NextFunction) {
  try {
    const data = await userService.getList();
    return response.status(200).json({ data });
  } catch (error) {
    next(error);
  }
}

export async function getUserById(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const user = await userService.getById(id);

    if (!user) {
      throw ErrorResponse.notFound(responseMessage.notFound);
    }

    return response.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
}

export async function addUser(request: Request, response: Response, next: NextFunction) {
  const transaction = await sequelize.transaction();
  try {
    const { body } = request;

    const passwordHashed = hash(body.password, 10);

    await userService.create({ ...body, password: passwordHashed }, { transaction });

    await transaction.commit();
    return response.status(201).json({ message: responseMessage.user.addSuccess });
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
}

export async function updateUser(request: Request, response: Response, next: NextFunction) {
  try {
    const data = request.body;
    const { id } = request.params;

    if (data.password.length > 0) {
      data.password = hash(data.password, 10);
    } else {
      delete data.password;
    }

    await userService.update(id, data);

    return response.status(200).json({ message: responseMessage.user.updateSuccess });
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;

    await userService.delete(id);

    return response.status(200).json({ message: responseMessage.user.deleteSuccess });
  } catch (error) {
    next(error);
  }
}
