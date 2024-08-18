import { Router } from 'express';
import { authRouter } from '../modules/auth/router';
import { topicRouter } from '../modules/topic/router';

export const appRouter = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/topic', topicRouter);
