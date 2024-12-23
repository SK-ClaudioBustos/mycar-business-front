import { ErrorData } from "@type/types";
import "./styles/Error.css";

interface Props {
    label: string
    error?: ErrorData
}

export const Error = ({ label, error }: Props) => {
    return (
        <div className="flex-center error-container">
            <div className="error box-shadow">
                <h2>
                    {label}
                </h2>
                {
                    error && (
                        <>
                            <p>{error.name}</p>
                            <span>{error.message}</span>
                        </>
                    )
                }
            </div>
        </div>
    );
}