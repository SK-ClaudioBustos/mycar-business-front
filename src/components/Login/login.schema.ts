import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3, "At least 3 characters are required."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;