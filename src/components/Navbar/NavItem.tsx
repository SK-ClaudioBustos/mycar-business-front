import { NavItemData } from "@type/types";
import "./styles/NavItem.css";
import { NavLink } from "react-router";

type Props = NavItemData;

export const NavItem = ({ label, section }: Props) => {
    return (
        <NavLink to={`/${section}`} className="nav-item" id={section} viewTransition>
            <span>{label}</span>
        </NavLink>
    );
}