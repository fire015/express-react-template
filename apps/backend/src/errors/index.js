export class BaseError extends Error {
  status = 500;
}

export class ValidationError extends BaseError {
  status = 400;
}

export class UnauthorizedError extends BaseError {
  status = 401;
}

export class ForbiddenError extends BaseError {
  status = 403;
}

export class NotFoundError extends BaseError {
  status = 404;
}
