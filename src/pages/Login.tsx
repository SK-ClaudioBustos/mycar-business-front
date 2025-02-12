import { LoginBody } from "@components/Login/LoginBody";
import { useAlertStorage } from "@store/alert.store";
import { lazy, Suspense } from "react";
import "./styles/login.css";
const Alert = lazy(() => import("@utils/Alert"));

export const Login = () => {
    const alert = useAlertStorage((state) => state.alert);
    return (
        <section className="container">
            <LoginBody />
            <Suspense>
                <Alert alert={alert} /> 
            </Suspense>
        </section>
    );
}