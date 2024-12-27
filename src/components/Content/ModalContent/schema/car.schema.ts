import { z } from "zod";

export const carSchema = z.object({
    companyName: z.string().min(2, "Se necesita minimamente 2 caracteres"),
    modelName: z.string().min(3, "Se necesita minimamente 3 caracteres"),
    km: z.string().optional(),
});

export type CarFormValues = z.infer<typeof carSchema>;