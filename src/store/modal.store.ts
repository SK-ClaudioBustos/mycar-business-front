import { ModalType } from '@type/types';
import { create, StateCreator } from 'zustand';

interface ModalStorageState {
    modalData: ModalType
}

interface Actions {
    setShowModal: (modalData: ModalType) => void
}

type ModalData = ModalStorageState & Actions;

const modalApi: StateCreator<ModalData> = (set) => ({
    modalData: {
        showModal: false,
    },
    setShowModal: ({ showModal, action=undefined, data = null, title = "", width="450px" }) => {
        set(() => ({
            modalData: {
                showModal,
                title,
                action,
                data,
                width
            }
        }))
    }
});

export const useModalStorage = create<ModalData>(modalApi);