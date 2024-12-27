import { z } from "zod";

export const carSchema = z.object({
    companyName: z.string().min(2, "At least 2 characters are required"),
    modelName: z.string().min(3, "At least 3 characters are required."),
    km: z.string().max(7,"Maximum of 7 characters allowed").optional(),
});

export const carFormDefaultValues = {
    companyName: "",
    modelName: "",
    km: ""
};

export type CarFormValues = z.infer<typeof carSchema>;