class BaseError extends Error {
  status = 500;
}

class ValidationError extends BaseError {
  status = 400;
}

class UnauthorizedError extends BaseError {
  status = 401;
}

class ForbiddenError extends BaseError {
  status = 403;
}

class NotFoundError extends BaseError {
  status = 404;
}

module.exports = { BaseError, ValidationError, UnauthorizedError, NotFoundError, ForbiddenError };
