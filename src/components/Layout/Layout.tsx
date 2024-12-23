import { NavBar } from "@components/Navbar/NavBar";
import { lazy, Suspense } from "react";
import "./Layout.css";
import { Loading } from "@utils/Loading";

const Content = lazy(() => import("@components/Content/Content.tsx"));

export const Layout = () => {
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
        </div>
    );
}