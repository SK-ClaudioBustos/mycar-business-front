import { NavBar } from "@components/Navbar/NavBar";
import { Content } from "@components/Content/Content";
import "./Layout.css";

export const Layout = () => {
    return (
        <div className="layout">
            <header>
                <NavBar />
            </header>
            <main>
                <Content />
            </main>
        </div>
    );
}