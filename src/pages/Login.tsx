import { useFetchToken } from "@services/authService";
import { Button } from "@utils/Button";
import { Error } from "@utils/Error";
import { Loading } from "@utils/Loading";
import { useNavigate } from "react-router";
import "./styles/login.css";

export const Login = () => {
    const { loading, error } = useFetchToken(import.meta.env.VITE_EMAIL, import.meta.env.VITE_PASSWORD);
    const navigate = useNavigate();

    if (loading) {
        return (
            <section className="login">
                <Loading label="Getting token" />
            </section>
        );
    }

    if (error) {
        return <Error label="An error has ocurred" error={error} />;
    }

    const handleSubmit = () => {
        navigate("/cars");
    }

    return (
        <section className="login">
            <div className="login-content box-shadow">
                <Button onClick={handleSubmit} className="bg-blue" height="40px" width="100%" ariaLabel="go cars section">
                    Submit
                </Button>
            </div>
        </section>
    );
}