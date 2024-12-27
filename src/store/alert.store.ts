import { AlertData } from "@type/types";
import { create, StateCreator } from "zustand";

interface AlertState {
    alert: AlertData;
}

interface Actions {
    setAlert: (alert: AlertData) => void
}

type AlertStoreType = AlertState & Actions;

const alertApi: StateCreator<AlertStoreType> = (set) => ({
    alert: {
        isVisible: false,
        message: null,
        duration: 0,
        type: null
    },
    setAlert: ({ isVisible, message, type, duration = 3000 }) => {
        set(() => ({
            alert: {
                duration,
                isVisible,
                message,
                type
            }
        }));
        setTimeout(() => {
            set({
                alert: {
                    isVisible: false,
                    message: null,
                    duration: 0,
                    type: "none",
                }
            });
        }, duration);
    }
});

export const useAlertStorage = create<AlertStoreType>(alertApi);