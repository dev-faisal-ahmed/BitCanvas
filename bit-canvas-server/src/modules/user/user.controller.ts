import { tryCatch } from '../../utils/try-catch';
import { userService } from './services';

const singup = tryCatch(async (req, res) => {
  const signupResponse = await userService.signup(req.body);
});

const login = tryCatch(async (req, res) => {
  const loginResponse = await userService.login(req.body);
});

export const userController = { login };
