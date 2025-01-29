import { z } from "zod";

export const issueSchema = z.object({
    name: z.string(),
    description: z.string(),
    date: z.date(),
    distance: z.number(),
    car: z.string().array(),
    status: z.string().array(),
    type: z.string().array()
});

export const issueFormDefaultValues = {
    name: "",
    description: "",
    date: "",
    distance: 0,
    car: undefined,
    status: undefined,
    type: undefined
};

export type IssueFormValues = z.infer<typeof issueSchema>;