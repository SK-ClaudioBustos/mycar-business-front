import { useModalStorage } from "@store/modal.store";
import { Button } from "@utils/Button";
import { AppRoutes, SectionMap } from "src/types/types";
import { CarDetails } from "./CarDetails";
import { IssuesDetails } from "./IssuesDetails";
import "./styles/ItemDetails.css";

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any> | null | undefined;
    section: AppRoutes;
}

export const ItemDetails = ({ data, section }: Props) => {
    const setShowModal = useModalStorage((state) => state.setShowModal);
    const DETAILS: SectionMap = {
        "/cars": <CarDetails data={data} />,
        "/issues": <IssuesDetails data={data} />
    };
    return (
        <div className="item-details">
            <section className="details-list">
                {
                    DETAILS[section]
                }
            </section>
            <Button
                onClick={() => setShowModal({ showModal: false })}
                ariaLabel="Submit form"
                type="button"
                className="bg-gray"
                height="40px"
                width="100%"
                borderRadius="5px">
                Close
            </Button>
        </div>
    );
}