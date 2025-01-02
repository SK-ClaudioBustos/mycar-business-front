import { ModalType } from "@type/types";
import { Button } from "@utils/Button";
import { Error } from "@utils/Error";
import "./styles/ItemDetails.css";

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any> | null | undefined;
    setShowModal: (modalData: ModalType) => void;
}

const CarProperties = ["Car Id", "Company", "Model", "KM"];

export const ItemDetails = ({ data, setShowModal }: Props) => {
    if (!data) return <Error label="An error occurred while retrieving the details" />;
    return (
        <div className="item-details">
            <section className="details-list">
                {
                    Object.values(data).map((value, index) => (
                        <div>
                            <p>{CarProperties[index]}</p>
                            <span>{value}</span>
                        </div>
                    ))
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