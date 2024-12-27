import styles from "./styles/Alert.module.css";

interface Props {
    show: boolean;
    message: string;
    type?: "success" | "error";
}

export default function Alert({ show, message, type = "success" }: Props) {

    if(!show){
        return null;
    }

    return (
        <div className={`${styles.alert} ${styles[type]}`}>
            <p>
                <b>
                    {`${type[0].toLocaleUpperCase()}${type.slice(1)}`}
                </b>
            </p>
            <span>
                {message}
            </span>
        </div>
    );
}