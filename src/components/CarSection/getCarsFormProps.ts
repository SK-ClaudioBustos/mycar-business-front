import { carFormDefaultValues, carSchema } from "@components/Content/ModalContent/schema/car.schema";
import { AppRoutes } from "@type/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCarsFormProps = (action: "POST" | "PUT", data: any) => ({
    action,
    defaultValues: action === "POST" ? carFormDefaultValues : { companyName: data?.companyName, modelName: data?.modelName, km: data?.km },
    schema: carSchema,
    section: AppRoutes.CARS,
    data
});