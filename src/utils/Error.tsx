import "./styles/Error.css";

export const Error = ({label}: {label: string}) => {
    return (
        <div className="flex-center error-container">
            <div className="error box-shadow">
                <h2>
                    {label}
                </h2>
            </div>
        </div>
    );
}