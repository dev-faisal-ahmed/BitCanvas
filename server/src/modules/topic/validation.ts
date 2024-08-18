import { z } from 'zod';

export const addTopicSchema = z.object({
  name: z
    .string({ required_error: 'Topic Name is required' })
    .min(2, { message: 'Minimum length has to be 2' }),
});
