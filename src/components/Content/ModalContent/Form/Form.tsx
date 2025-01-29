/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTableContext } from "@context/table.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleUpsert } from "@services/car/handleUpsert";
import { useAlertStorage } from "@store/alert.store";
import { useModalStorage } from "@store/modal.store";
import { AppRoutes } from "@type/types";
import { Button } from "@utils/Button";
import { Loading } from "@utils/Loading";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HTMLFormMethod } from "react-router";
import { CarForm } from "./CarForm";
import { IssuesForm } from "./IssuesForm";
import "./styles/Form.css";

interface FormProps {
    action: HTMLFormMethod;
    schema: any;
    defaultValues: any;
    section: AppRoutes;
    data: Record<string, any> | null | undefined;
}

export const Form = ({ action, section, schema, defaultValues, data }: FormProps) => {
    const setShowAlert = useAlertStorage((state) => state.setAlert);
    const setShowModal = useModalStorage((state) => state.setShowModal);
    const { handleAddRow, fetchRows } = useTableContext();
    const [loading, setLoading] = useState(false);
    const { control, formState: { errors }, handleSubmit } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues,
    });

    const onSubmit = (dataForm: any) => {
        let itemData = null;
        if (section === "/cars") {
            itemData = {
                companyName: dataForm.companyName,
                modelName: dataForm.modelName,
                km: dataForm.km ? Number(dataForm.km) : 0
            };
        } else {
            itemData = null;
        }
        const endpoint = action === "POST" ? `api${section}` : `api${section}/${data?.id}`;
        handleUpsert({ method: action, endpoint, itemData, fetchRows, handleAddRow, setLoading, setShowModal, setShowAlert });
    };

    return (
        <form action={action} className="form" onSubmit={handleSubmit(onSubmit)}>
            {
                loading && <Loading label={action === "PUT" ? "Editing..." : "Creating..."} />
            }
            {
                !loading && section === "/cars"
                    ? (<CarForm control={control} errors={errors} />)
                    : (<IssuesForm control={control} errors={errors} />)
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