import { NavBar } from "@components/Navbar/NavBar";
import { useAlertStorage } from "@store/alert.store";
import { Error } from "@utils/Error";
import { lazy } from "react";
import { Outlet } from "react-router";
import ErrorBoundary from "./ErrorBoundary";
import "./Layout.css";
const Alert = lazy(() => import("@utils/Alert"));


export const Layout = () => {
    const alert = useAlertStorage((state) => state.alert);
    return (
        <ErrorBoundary fallback={<Error label="ErrorBoundary: unknow error" />}>
            <div className="layout">
                <header>
                    <NavBar />
                </header>
                <main>
                    <Outlet />
                    <Alert alert={alert} />
                </main>
            </div>
        </ErrorBoundary>
    );
}