import { LoginForm } from "@components/Login/LoginForm";
import { useAlertStorage } from "@store/alert.store";
import { lazy, Suspense } from "react";
import "./styles/login.css";
const Alert = lazy(() => import("@utils/Alert"));

export const Login = () => {
    const alert = useAlertStorage((state) => state.alert);
    return (
        <section className="container">
            <LoginForm />
            <Suspense>
                <Alert alert={alert} /> 
            </Suspense>
        </section>
    );
}