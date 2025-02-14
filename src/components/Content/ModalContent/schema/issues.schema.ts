import { z } from "zod";

export const issueSchema = z.object({
    name: z.string().min(10).max(100),
    description: z.string().min(25).max(250).optional(),
    currentDistance: z.number().min(0).max(2000000).optional(),
    carId: z.enum(["disabled","1","2"]),
    typeId: z.enum(["disabled","1","2"]),
    notificationDays: z.number().min(1).max(3650).optional(),
    notificationDistance: z.number().min(50).max(15000).optional(),
});

export const issueFormDefaultValues = {
    name: "",
    description: "",
    notificationDays: 1,
    notificationDistance: 50,
    currentDistance: 0,
    typeId: "disabled",
    carId: "disabled",
};

export type IssueFormValues = z.infer<typeof issueSchema>;