import { z } from 'zod';
import { enumGenerator } from '../../helpers/zodHelper';
import { articleStatuses } from './constants';

export const addArticleSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(1, { message: 'Title is too short' }),
  content: z.string({ required_error: 'Content is required' }),
  status: enumGenerator(
    articleStatuses,
    `Status has to be ${articleStatuses}`
  ).optional(),
});
