import { Router } from 'express';
import { UserRouter } from '../modules/user/user.router';

export const router = Router();

router.use('/auth', UserRouter);
