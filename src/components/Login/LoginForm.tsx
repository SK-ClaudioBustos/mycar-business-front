import { LoginFormValues, loginSchema } from "@components/Login/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAlertStorage } from "@store/alert.store";
import { Button } from "@utils/Button";
import { Loading } from "@utils/Loading";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { LoginFormContent } from "./LoginFormContent";

export const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const setAlert = useAlertStorage((state) => state.setAlert);
    const navigate = useNavigate();
    const { control, formState: { errors }, handleSubmit } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
        defaultValues: {
            email: import.meta.env.VITE_EMAIL || "",
            password: import.meta.env.VITE_PASSWORD || "",
        },
    });

    const onSubmit: SubmitHandler<LoginFormValues> = ({ email, password }: LoginFormValues) => {
        setLoading(true);
        const LOGIN_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api/auth/login`;
        const requestParams: RequestInit = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }

        fetch(LOGIN_URL, requestParams).then((response) => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
        })
            .then(() => navigate("/cars"))
            .catch(() => setAlert({ message: `An authentication error has ocurred`, type: "error" }))
            .finally(() => setLoading(false));
    };

    if (loading) {
        return (
            <section className="login">
                <Loading label="Authenticating, please wait..." />
            </section>
        );
    }
    return (
        <div className="login-form box-shadow">
            <div className="login-header">
                <h2>Login</h2>
            </div>
            <div className="login-content">
                <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <LoginFormContent control={control} errors={errors} />
                    <Button type="submit" className="bg-blue" height="40px" width="100%" ariaLabel="go cars section">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}