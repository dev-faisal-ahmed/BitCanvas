import bcrypt from 'bcrypt';
import { User } from '../../user/model';
import { catchAsync } from '../../../middleware';
import { BCRYPT_SALT } from '../../../app/config';
import { registerSchema } from '../validation';
import { sendSuccessResponse } from '../../../helpers';

export const register = catchAsync(async (req, res) => {
  // validation
  const payload = await registerSchema.parseAsync(req.body);

  // hashing password
  const hashedPassword = await bcrypt.hash(payload.password, BCRYPT_SALT);
  const user = await User.create({ ...payload, password: hashedPassword });

  const { password, ...restUserInfo } = user.toObject();

  // sending response
  return sendSuccessResponse(res, {
    status: 200,
    message: 'User registered successfully',
    data: restUserInfo,
  });
});
