import jwt from 'jsonwebtoken';
import { User } from '../modules/user/model';
import { TRole } from '../modules/user/interface';
import { AppError } from '../utils';
import { catchAsync } from './catchAsync';
import { JwtPayload } from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../app/config';

const BEARER = 'bearer';

export const authGuard = (...requiredRoles: TRole[]) => {
  return catchAsync(async (req, __, next) => {
    // checking access token
    const accessToken = req.headers.authorization;
    if (!accessToken) throw new AppError('No Access Token Found', 403);

    const [bearer, token] = accessToken.split(' ');
    if (!bearer || bearer.toLowerCase() !== BEARER)
      throw new AppError('Invalid token formate', 400);

    // decoding token
    if (!token) throw new AppError('Invalid token formate', 403);

    const decodedUser = jwt.verify(token, ACCESS_TOKEN_SECRET) as JwtPayload;
    if (!decodedUser) throw new AppError('Invalid token', 403);

    const user = await User.findOne({ _id: decodedUser._id });
    if (!user) throw new AppError('User not found', 403);

    if (!requiredRoles.includes(user.role))
      throw new AppError('Unauthorized access', 401);

    req.user = user;
    next();
  });
};
