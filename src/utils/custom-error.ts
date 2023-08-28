export class HttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class ErrorResponse {
  static notFound(message: string): HttpError {
    return new HttpError(message, 404);
  }

  static badRequest(message: string): HttpError {
    return new HttpError(message, 400);
  }
}
