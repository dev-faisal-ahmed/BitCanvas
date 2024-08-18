import { z } from 'zod';

// sub schema
const userNameSubSchema = z.object(
  {
    firstName: z.string({ required_error: 'FirstName is required' }),
    lastName: z.string({ required_error: 'LastName is required' }),
  },
  { required_error: 'Name is required' }
);

// main schema
export const registerSchema = z.object({
  name: userNameSubSchema,
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Please provide a valid email' }),

  password: z.string({ required_error: 'Password is required' }),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Please provide a valid email' }),

  password: z.string({ required_error: 'Password is required' }),
});
