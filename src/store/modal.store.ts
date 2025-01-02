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
    setShowModal: ({ showModal, action=null, data = null, title = "" }) => {
        set(() => ({
            modalData: {
                showModal,
                title,
                action,
                data,
            }
        }))
    }
});

export const useModalStorage = create<ModalData>(modalApi);