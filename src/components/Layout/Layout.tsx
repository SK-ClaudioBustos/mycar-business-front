import { NavBar } from "@components/Navbar/NavBar";
import { Table } from "@components/Table/Content";
import "./Layout.css";

export const Layout = () => {
    return (
        <div className="layout">
            <header>
                <NavBar />
            </header>
            <main>
                <Table />
            </main>
        </div>
    );
}