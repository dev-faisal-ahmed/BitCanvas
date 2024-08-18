import {
  generateAccessToken,
  generateRefreshToken,
  sendSuccessResponse,
} from '../../../helpers';
import bcrypt from 'bcrypt';
import { User } from '../../user/model';
import { AppError } from '../../../utils';
import { loginSchema } from '../validation';
import { catchAsync } from '../../../middleware';

export const login = catchAsync(async (req, res) => {
  // validation
  const payload = await loginSchema.parseAsync(req.body);
  const { email, password } = payload;

  // getting user
  const isUserExist = await User.findOne({ email });
  if (!isUserExist) throw new AppError('Invalid credentials', 400);

  const isPasswordMatch = await bcrypt.compare(password, isUserExist.password);
  if (!isPasswordMatch) throw new AppError('Invalid credentials', 400);

  // generating token
  const { _id, name, provider } = isUserExist;
  const { accessToken } = generateAccessToken({ _id, name, email, provider });
  const { refreshToken } = generateRefreshToken({ _id, email });

  // response
  return sendSuccessResponse(res, {
    status: 200,
    message: 'Login successful',
    data: { accessToken, refreshToken },
  });
});
