import EyeIcon from "@icons/eye.svg?react";
import PencilIcon from "@icons/pencil.svg?react";
import TrashIcon from "@icons/trash.svg?react";
import { Car } from "@type/types";
import { Button } from "@utils/Button";
import { IconSVG } from "@utils/IconSVG";
import "./styles/TableRow.css";

interface Props {
    car: Car
}

export const TableRow = ({ car }: Props) => {
    const { company, model, KM } = car;
    return (
        <div className="table-row">
            <span>
                {company}
            </span>
            <span>
                {model}
            </span>
            <span>
                {KM}
            </span>
            <div className="actions">
                <Button height="50" width="50" borderRadius="50%">
                    <IconSVG Icon={PencilIcon} size={24} />
                </Button>
                <Button height="50" width="50" borderRadius="50%">
                    <IconSVG Icon={TrashIcon} size={24} />
                </Button>
                <Button height="50" width="50" borderRadius="50%">
                    <IconSVG Icon={EyeIcon} size={24} />
                </Button>
            </div>
        </div>
    );
}