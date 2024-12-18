import { NavItemData } from "@type/types";
import { NavItem } from "./NavItem";
import "./styles/NavBar.css";

const ITEMS: NavItemData[] = [
    {
        section: "cars",
        label: "Cars"
    },
    {
        section: "issues",
        label: "Issues"
    }
];

export const NavBar = () => {
    const sectionSelected = "cars";

    return (
        <nav className="box-shadow">
            {
                ITEMS.map((item) => (
                    <NavItem
                        key={item.section}
                        tabSeleccionada={sectionSelected}
                        {...item}
                    />
                ))
            }
        </nav>
    );
}