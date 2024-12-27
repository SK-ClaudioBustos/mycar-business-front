import { zodResolver } from "@hookform/resolvers/zod";
import { submitFormData } from "@services/submitFormData";
import { useModalStorage } from "@store/modal.store";
import { Button } from "@utils/Button";
import { Loading } from "@utils/Loading";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CarForm } from "./CarForm";
import { carFormDefaultValues, CarFormValues, carSchema } from "./schema/car.schema";
import "./styles/Form.css";

export const Form = () => {
    const setShowModal = useModalStorage((state) => state.setShowModal);
    const [loading, setLoading] = useState(false);
    const { control, formState: { errors }, handleSubmit } = useForm<CarFormValues>({
        resolver: zodResolver(carSchema),
        mode: "onChange",
        defaultValues: carFormDefaultValues,
    });

    const onSubmit: SubmitHandler<CarFormValues> = (data) => {
        submitFormData({ data, setLoading, setShowModal });
    };

    return (
        <form action="POST" className="form" onSubmit={handleSubmit(onSubmit)}>
            {
                loading
                    ? (<Loading label="Uploading new Car" />)
                    : (<CarForm control={control} errors={errors} />)
            }
            <Button type="submit" className="bg-blue" height="40px" width="100%" borderRadius="5px">Submit</Button>
        </form>
    );
}