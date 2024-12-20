import { NavBar } from "@components/Navbar/NavBar";
import { lazy, Suspense } from "react";
import "./Layout.css";

const Content = lazy(() => import("@components/Content/Content.tsx"));

export const Layout = () => {
    return (
        <div className="layout">
            <header>
                <NavBar />
            </header>
            <main>
                <Suspense fallback={<div className="flex-center">CARGANDO CONTENIDO</div>}>
                    <Content />
                </Suspense>
            </main>
        </div>
    );
}