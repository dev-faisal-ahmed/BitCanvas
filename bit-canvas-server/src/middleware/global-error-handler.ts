import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { SendErrorResponse } from '../utils/response-helper';

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next
) => {
  let status = error.status || 500;
  let message = error.message || 'Something went wrong';

  console.log(error);

  if (error.name === 'ZodError') {
    message = 'Validation Error';
    status = 400;
  }

  return SendErrorResponse(res, { message, status, error });
};
