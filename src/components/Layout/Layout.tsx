import { NavBar } from "@components/Navbar/NavBar";
import { ReactNode } from "react";
import "./Layout.css";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="layout">
            <header>
                <NavBar />
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}