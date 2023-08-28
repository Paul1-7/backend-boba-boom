import { Response } from "express";
import { HttpError } from "~/utils";
import { ErrorHandlerStrategy } from "..";

export class HttpErrorHandler implements ErrorHandlerStrategy {
  canHandle(error: Error): boolean {
    return error instanceof HttpError;
  }

  handle(error: Error, res: Response): void {
    const httpError = error as HttpError;
    res.status(httpError.status).json({ error: httpError.message });
  }
}
