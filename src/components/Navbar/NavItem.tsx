import { NavItemData } from "@type/types";
import "./styles/NavItem.css";

type Props = NavItemData & { tabSeleccionada: string };

export const NavItem = ({ tabSeleccionada, label, section }: Props) => {
    return (
        <div className={tabSeleccionada === section ? "nav-item selected" : "nav-item"} id={section}>
            <span>{label}</span>
        </div>
    );
}