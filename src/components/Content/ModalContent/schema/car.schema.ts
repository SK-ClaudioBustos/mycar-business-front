import { z } from "zod";

export const carSchema = z.object({
    companyName: z.string().min(2, "At least 2 characters are required"),
    modelName: z.string().min(3, "At least 3 characters are required."),
    km: z.number().max(2000000, "The Maximum Kilometers permited are 2.000.000").optional()
});

export const carFormDefaultValues = {
    companyName: "",
    modelName: "",
    km: 0
};

export type CarFormValues = z.infer<typeof carSchema>;