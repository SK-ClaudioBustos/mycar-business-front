import { useTableContext } from "@context/table.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleUpsert } from "@services/car/handleUpsert";
import { useAlertStorage } from "@store/alert.store";
import { ModalAction, ModalType } from "@type/types";
import { Button } from "@utils/Button";
import { Loading } from "@utils/Loading";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { carFormDefaultValues, CarFormValues, carSchema } from "../schema/car.schema";
import { CarForm } from "./CarForm";
import "./styles/Form.css";

interface FormProps {
    action: ModalAction | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any> | null | undefined;
    setShowModal: (modalData: ModalType) => void;
}

export const Form = ({ action, data, setShowModal }: FormProps) => {
    const setShowAlert = useAlertStorage((state) => state.setAlert);

    const { handleAddRow, fetchRows } = useTableContext();
    const [loading, setLoading] = useState(false);
    const { control, formState: { errors }, handleSubmit } = useForm<CarFormValues>({
        resolver: zodResolver(carSchema),
        mode: "onChange",
        defaultValues: action === "edit" ? { companyName: data?.companyName, modelName: data?.modelName, km: data?.km } : carFormDefaultValues,
    });

    const onSubmit: SubmitHandler<CarFormValues> = (dataForm) => {
        handleUpsert({ data: dataForm, action, id: action === "edit" ? data?.id : null, fetchRows, handleAddRow, setLoading, setShowModal, setShowAlert });
    };

    return (
        <form action={action === "edit" ? "PUT" : "POST"} className="form" onSubmit={handleSubmit(onSubmit)}>
            {
                loading
                    ? (<Loading label={action === "edit" ? "Editing Car..." : "Uploading Car..."} />)
                    : (<CarForm control={control} errors={errors} />)
            }
            <div>
                <Button
                    ariaLabel="Submit form"
                    type="submit"
                    className="bg-blue"
                    height="40px"
                    width="100%"
                    borderRadius="5px">
                    Submit
                </Button>
                <Button
                    onClick={() => setShowModal({ showModal: false })}
                    ariaLabel="Submit form"
                    type="button"
                    className="bg-gray"
                    height="40px"
                    width="100%"
                    borderRadius="5px">
                    Cancel
                </Button>
            </div>
        </form>
    );
}