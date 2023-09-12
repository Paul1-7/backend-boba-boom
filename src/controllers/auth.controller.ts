import { compare } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { responseMessage } from "~/constants";
import { UserService } from "~/services";
import { ErrorResponse } from "~/utils";

const userService = new UserService();

export const loginUser = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { user, password } = request.body;

    const data = await userService.getByOptions({ where: { user } });

    if (!data) {
      throw ErrorResponse.notFound(responseMessage.auth.notValid);
    }

    const isValidPassword = await compare(password, data.toJSON().password);

    if (!isValidPassword) {
      throw ErrorResponse.notFound(responseMessage.auth.notValid);
    }
    delete data.toJSON().password;
    response.json(data);
  } catch (error) {
    next(error);
  }
};
