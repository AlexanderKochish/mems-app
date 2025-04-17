import { z } from "zod";

export const memSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(3).max(100),
  image: z.string().url(),
  desc: z.string().max(200).optional(),
  likes: z.number().int().min(0).max(99),
});

export type memSchemaType = z.infer<typeof memSchema>;
