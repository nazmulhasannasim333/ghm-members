import { z } from "zod";

const createMemberValidationSchema = z.object({
  name: z.string(),
  contactNo: z.number(),
  address: z.string(),
  paymentStatus: z.boolean().default(false),
});

export const MemberZodValidations = {
  createMemberValidationSchema,
};
