import AlertIcon from "@icons/alert.svg?react";
import CheckIcon from "@icons/check.svg?react";
import { AlertData, TypeAlert } from "@type/types";
import { ReactNode } from "react";
import styles from "./styles/Alert.module.css";

interface Props {
    alert: AlertData
}

const ICONS: Record<TypeAlert, ReactNode> = {
    "success": <CheckIcon width={20} height={20} />,
    "error": <AlertIcon width={20} height={20} />,
    "none": <></>
}

export default function Alert({ alert }: Props) {
    const { isVisible, message, type = "success" } = alert;
    if (!isVisible || !type) {
        return null;
    }

    return (
        <div className={`${styles.alert} ${styles[type]}`}>
            <div className="flex-center">
                {
                    ICONS[type]
                }
            </div>
            <div>
                <p>
                    {message}
                </p>
            </div>
        </div>
    );
}