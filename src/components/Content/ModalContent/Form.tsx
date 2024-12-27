import { zodResolver } from "@hookform/resolvers/zod";
import { useModalStorage } from "@store/modal.store";
import { Button } from "@utils/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { CarForm } from "./CarForm";
import { CarFormValues, carSchema } from "./schema/car.schema";
import "./styles/Form.css";

export const Form = () => {
    const setShowModal = useModalStorage((state) => state.setShowModal);
    const { control, formState: { errors }, handleSubmit } = useForm<CarFormValues>({
        resolver: zodResolver(carSchema),
        mode: "onChange",
        defaultValues: {
            companyName: "",
            modelName: "",
            km: ""
        },
    });

    const onSubmit: SubmitHandler<CarFormValues> = (data) => {
        try {
            // TODO enviar datos a backend
            console.log(data);
        } catch (error) {
            console.log(error);
            // TODO controlar errores con una alerta global
        } finally {
            setShowModal(false);
        }
    };

    return (
        <form action="POST" className="form" onSubmit={handleSubmit(onSubmit)}>
            <CarForm control={control} errors={errors} />
            <Button type="submit" className="bg-blue" height="40px" width="100%" borderRadius="5px">Submit</Button>
        </form>
    );
}