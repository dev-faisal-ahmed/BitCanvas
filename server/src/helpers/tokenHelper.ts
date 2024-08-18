import jwt from 'jsonwebtoken';
import { Schema } from 'mongoose';
import { TUserName } from '../modules/user/interface';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../app/config';

type TAccessTokenPayload = {
  _id: Schema.Types.ObjectId;
  name: TUserName;
  email: string;
  image?: string;
  provider: string;
};

export const generateAccessToken = (payload: TAccessTokenPayload) => {
  const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET!, {
    expiresIn: '12h',
  });

  return { accessToken };
};

type TRefreshTokenPayload = { _id: Schema.Types.ObjectId; email: string };

export const generateRefreshToken = (payload: TRefreshTokenPayload) => {
  const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET!, {
    expiresIn: '30d',
  });

  return { refreshToken };
};
