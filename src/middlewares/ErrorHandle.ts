import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ForeignKeyConstraintErrorHandler, HttpErrorHandler, ZodErrorHandler } from "~/errors";
import { ErrorHandlerStrategy } from "..";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const strategies: ErrorHandlerStrategy[] = [
    new ForeignKeyConstraintErrorHandler(),
    new HttpErrorHandler(),
    new ZodErrorHandler(),
  ];

  for (const strategy of strategies) {
    if (strategy.canHandle(err)) {
      return strategy.handle(err, res);
    }
  }

  return res.status(500).json({ error: "error en el servidor" });
};
