import { Button } from "@utils/Button";
import { IconSVG } from "@utils/IconSVG";
import PlusIcon from "@icons/plus.svg?react";
import "./styles/Content.css";
import { Table } from "./Table";

export const Content = () => {
    return (
        <section className="content">
            <div className="button-container">
                <Button height="80" width="80" className="background-white" isDropShadow>
                    <IconSVG Icon={PlusIcon} size={48} />
                </Button>
            </div>
            <Table />
        </section>
    );
}