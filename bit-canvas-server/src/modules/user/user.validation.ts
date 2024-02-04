import { z } from 'zod';

const SignUpValidationSchema = z.object({
  name: z.object(
    {
      firstName: z.string({ required_error: 'First Name is required' }),
      lastName: z.string({ required_error: 'Last Name is required' }),
    },
    { required_error: 'User name is required' }
  ),

  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Please provide a valid email' }),

  password: z.string({ required_error: 'Password is required' }),
});

const LoginValidationSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Please provide a valid email' }),

  password: z.string({ required_error: 'Password is required' }),
});

export type SignUpValidationType = z.infer<typeof SignUpValidationSchema>;
export type LoginValidationType = z.infer<typeof LoginValidationSchema>;

export const UserValidation = { SignUpValidationSchema };
