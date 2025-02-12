import { LoginFormValues, loginSchema } from "@components/Login/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAlertStorage } from "@store/alert.store";
import { Button } from "@utils/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { LoginForm } from "./LoginForm";

export const LoginContent = ({ handleLoading }: { handleLoading: (state: boolean) => void }) => {
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
        handleLoading(true);
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
            .finally(() => handleLoading(false));
    };

    return (
        <div className="login-content">
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                <LoginForm control={control} errors={errors} />
                <Button type="submit" className="bg-blue" height="40px" width="100%" ariaLabel="go cars section">
                    Submit
                </Button>
            </form>
        </div>
    );
}