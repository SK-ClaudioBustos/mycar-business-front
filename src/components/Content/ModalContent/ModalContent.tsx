import CloseIcon from "@icons/close.svg?react";
import { useModalStorage } from "@store/modal.store";
import { Button } from "@utils/Button";
import { IconSVG } from "@utils/IconSVG";
import { CSSProperties, ReactNode } from "react";
import "./styles/ModalContent.css";

export const ModalContent = ({ children }: { children: ReactNode }) => {
    const setShowModal = useModalStorage((state) => state.setShowModal);
    const title = useModalStorage((state) => state.modalData?.title);
    const width = useModalStorage((state) => state.modalData.width);
    return (
        <div style={{"--w": width} as CSSProperties} className="modal-content">
            <div className="modal-header">
                <span>{title}</span>
                <Button ariaLabel="Close modal" onClick={() => setShowModal({ showModal: false })} className="btn-close" height="25px" width="25px" borderRadius="50%">
                    <IconSVG color="white" Icon={CloseIcon} />
                </Button>
            </div>
            <div className="modal-body">
                {children}
            </div>
        </div>
    );
}