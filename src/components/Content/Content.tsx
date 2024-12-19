import { Button } from "@utils/Button";
import { IconSVG } from "@utils/IconSVG";
import PlusIcon from "@icons/plus.svg?react";
import "./styles/Content.css";
import { Table } from "./Table";

export const Content = () => {
    return (
        <section className="content">
            <div className="button-container">
                <Button height="60" width="60" className="background-white" isDropShadow>
                    <IconSVG Icon={PlusIcon} size={48} />
                </Button>
            </div>
            <Table />
        </section>
    );
}