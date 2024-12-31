import { NavBar } from "@components/Navbar/NavBar";
import { Loading } from "@utils/Loading";
import { ReactNode, Suspense } from "react";
import "./Layout.css";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="layout">
            <header>
                <NavBar />
            </header>
            <main>
                <Suspense fallback={<div className="flex-center"><Loading label="Loading Content" /></div>}>
                    {children}
                </Suspense>
            </main>
        </div>
    );
}