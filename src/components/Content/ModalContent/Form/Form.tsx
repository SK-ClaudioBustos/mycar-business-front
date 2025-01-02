import { useTableContext } from "@context/table.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitFormData } from "@services/submitFormData";
import { useAlertStorage } from "@store/alert.store";
import { useModalStorage } from "@store/modal.store";
import { Button } from "@utils/Button";
import { Loading } from "@utils/Loading";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { carFormDefaultValues, CarFormValues, carSchema } from "../schema/car.schema";
import { CarForm } from "./CarForm";
import "./styles/Form.css";

export const Form = () => {
    const formData = useModalStorage((state) => state.modalData.data);
    const action = useModalStorage((state) => state.modalData.action);
    const setShowModal = useModalStorage((state) => state.setShowModal);
    const setShowAlert = useAlertStorage((state) => state.setAlert);

    const { handleAddRow } = useTableContext();
    const [loading, setLoading] = useState(false);
    const { control, formState: { errors }, handleSubmit } = useForm<CarFormValues>({
        resolver: zodResolver(carSchema),
        mode: "onChange",
        defaultValues: formData ? formData : carFormDefaultValues,
    });

    const onSubmit: SubmitHandler<CarFormValues> = (data) => {
        submitFormData({ data, action, handleAddRow, setLoading, setShowModal, setShowAlert });
    };

    return (
        <form action="POST" className="form" onSubmit={handleSubmit(onSubmit)}>
            {
                loading
                    ? (<Loading label="Uploading new Car" />)
                    : (<CarForm control={control} errors={errors} />)
            }
            <Button ariaLabel="Submit form" type="submit" className="bg-blue" height="40px" width="100%" borderRadius="5px">Submit</Button>
        </form>
    );
}