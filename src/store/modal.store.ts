import { create, StateCreator } from 'zustand';

interface ModalStorageState {
    showModal: boolean
}

interface Actions {
    setShowModal: (showModalState: boolean) => void
}

type ModalData = ModalStorageState & Actions;

const modalApi: StateCreator<ModalData> = (set) => ({
    showModal: false,
    setShowModal: (showModalState) => { set(() => ({ showModal: showModalState })) }
});

export const useModalStorage = create<ModalData>(modalApi);