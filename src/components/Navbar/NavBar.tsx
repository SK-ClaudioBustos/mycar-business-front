import { ITEMS } from "./links.data";
import { NavItem } from "./NavItem";
import "./styles/NavBar.css";

export const NavBar = () => {

    return (
        <nav className="box-shadow">
            {
                ITEMS.map((item) => (
                    <NavItem
                        key={item.section}
                        {...item}
                    />
                ))
            }
        </nav>
    );
}