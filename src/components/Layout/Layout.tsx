import { NavBar } from "@components/Navbar/NavBar";
import { useAlertStorage } from "@store/alert.store";
import { Loading } from "@utils/Loading";
import { lazy, Suspense } from "react";
import "./Layout.css";
const Alert = lazy(() => import("@utils/Alert"));
const Content = lazy(() => import("@components/Content/Content.tsx"));

export const Layout = () => {
    const alert = useAlertStorage((state) => state.alert);

    return (
        <div className="layout">
            <header>
                <NavBar />
            </header>
            <main>
                <Suspense fallback={<div className="flex-center"><Loading label="Loading Content" /></div>}>
                    <Content />
                </Suspense>
            </main>
            <Alert alert={alert} />
        </div>
    );
}