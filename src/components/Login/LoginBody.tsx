
import { Loading } from "@utils/Loading";
import { useState } from "react";
import { LoginContent } from "./LoginContent";

export const LoginBody = () => {
    const [loading, setLoading] = useState(false);


    const handleLoading = (state: boolean) => {
        setLoading(state);
    }

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
            <LoginContent handleLoading={handleLoading} />
        </div>
    );
}