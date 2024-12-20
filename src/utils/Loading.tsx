import "./styles/Loading.css";

export const Loading = ({ label }: { label: string }) => {
    return (
        <div className="flex-center loading-container">
            <span className="loader-text">{label}</span>
            <svg
                className="loader-container"
                viewBox="0 0 40 40"
                height="40"
                width="40"
            >
                <circle
                    className="track"
                    cx="20"
                    cy="20"
                    r="17.5"
                    pathLength="100"
                    fill="none"
                />
                <circle
                    className="car"
                    cx="20"
                    cy="20"
                    r="17.5"
                    pathLength="100"
                    fill="none"
                />
            </svg>
        </div>
    );
}