import { NavBar } from "@components/Navbar/NavBar";
import { useAlertStorage } from "@store/alert.store";
import { lazy } from "react";
import { Outlet } from "react-router";
import "./Layout.css";
const Alert = lazy(() => import("@utils/Alert"));


export const Layout = () => {
    const alert = useAlertStorage((state) => state.alert);
    return (
        <div className="layout">
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
                <Alert alert={alert} />
            </main>
        </div>
    );
}