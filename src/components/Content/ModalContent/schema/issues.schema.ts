import { z } from "zod";

export const issueSchema = z.object({
    name: z.string().min(10).max(100),
    description: z.string().min(25).max(250).optional(),
    notificationDays: z.number().min(1).max(3650).optional(),
    notificationDistance: z.number().min(50).max(15000).optional(),
    currentDistance: z.number().min(0).max(2000000).optional(),
    typeId: z.enum(["disabled","1","2"]),
    carId: z.string().array(),
});

export const issueFormDefaultValues = {
    name: "",
    description: "",
    notificationDays: 0,
    notificationDistance: 0,
    currentDistance: 0,
    typeId: undefined,
    carId: undefined,
};

export type IssueFormValues = z.infer<typeof issueSchema>;