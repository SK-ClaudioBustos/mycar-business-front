import { issueFormDefaultValues, issueSchema } from "@components/Content/ModalContent/schema/issues.schema";
import { AppRoutes } from "@type/types";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getIssuesFormProps = (action: "PUT" | "POST", data: any) => ({
    section: AppRoutes.ISSUES,
    schema: issueSchema,
    defaultValues: action === "POST" ? issueFormDefaultValues : {},
    action,
    data
})