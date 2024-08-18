import { Response } from 'express';

type TSuccessResponse = { data: any; message: string; status: number };
type TErrorResponse = { error: any; message: string; status: number };

export const sendSuccessResponse = (
  res: Response,
  payload: TSuccessResponse
) => {
  const { status, message, data } = payload;
  return res.status(status).json({ ok: true, message, data });
};

export const sendErrorResponse = (res: Response, payload: TErrorResponse) => {
  const { status, message, error } = payload;
  return res.status(status).json({ ok: false, message, error });
};
