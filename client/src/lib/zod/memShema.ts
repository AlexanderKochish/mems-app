import { z } from "zod";

export const memSchema = z.object({
  title: z.string().min(3).max(100).optional(),
  image: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^https?:\/\/.+\.jpg$/.test(val), {
      message: "Image must be a valid JPG URL",
    }),
  desc: z.string().max(200).optional(),
  likes: z.number().int().min(0).max(99).optional(),
});

export type memSchemaType = z.infer<typeof memSchema>;
