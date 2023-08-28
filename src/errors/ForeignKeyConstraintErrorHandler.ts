import { Response } from "express";
import { ForeignKeyConstraintError } from "sequelize";
import { ErrorHandlerStrategy } from "..";

export class ForeignKeyConstraintErrorHandler implements ErrorHandlerStrategy {
  canHandle(error: Error): boolean {
    return error instanceof ForeignKeyConstraintError;
  }
  handle(error: Error, res: Response): void {
    res.status(400).json({ error: "Clave foránea no válida" });
  }
}
