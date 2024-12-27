import CloseIcon from "@icons/close.svg?react";
import { useModalStorage } from "@store/modal.store";
import { Button } from "@utils/Button";
import { IconSVG } from "@utils/IconSVG";
import { ReactNode } from "react";
import "./styles/ModalContent.css";

export const ModalContent = ({ title, children }: { title: string, children: ReactNode }) => {
    const setShowModal = useModalStorage((state) => state.setShowModal);
    return (
        <div className="modal-content">
            <div className="modal-header">
                <span>{title}</span>
                <Button onClick={() => setShowModal(false)} className="btn-close" height="50px" width="50px" borderRadius="50%">
                    <IconSVG color="white" Icon={CloseIcon} />
                </Button>
            </div>
            <div className="modal-body">
                {children}
            </div>
        </div>
    );
}