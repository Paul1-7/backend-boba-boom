import { Response } from "express";
import { z } from "zod";
import { ErrorHandlerStrategy } from "..";

export class ZodErrorHandler implements ErrorHandlerStrategy {
  private parseErrorMessage(error: z.ZodError) {
    return error.issues.map((issue) => ({ message: issue.message }));
  }

  canHandle(error: Error): boolean {
    return error instanceof z.ZodError;
  }

  handle(error: Error, res: Response): void {
    const errorZod = error as z.ZodError;
    res.status(400).json({ error: this.parseErrorMessage(errorZod) });
  }
}
