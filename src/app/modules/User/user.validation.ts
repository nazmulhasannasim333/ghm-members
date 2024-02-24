import { z } from "zod";

const createUserValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["superAdmin", "admin"]),
  isDeleted: z.boolean().default(false),
});

const loginValidationSchema = z.object({
  email: z.string({ required_error: "Email is required." }),
  password: z.string({ required_error: "Password is required" }),
});

export const UserZodValidations = {
  createUserValidationSchema,
  loginValidationSchema,
};
