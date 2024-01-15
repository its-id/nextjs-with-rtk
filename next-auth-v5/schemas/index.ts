import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required', // Custom error message
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

