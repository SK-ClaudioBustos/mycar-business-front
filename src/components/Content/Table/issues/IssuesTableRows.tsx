import { formatDate } from "@functions/formatDate";
import { IssueItem } from "src/types/issue";

export const IssuesTableRows = ({ item }: { item: IssueItem }) => {
    const { name, date, currentDistance } = item;
    return (
        <>
            <span>
                {name}
            </span>
            <span>
                {formatDate(date)}
            </span>
            <span>
                {currentDistance}
            </span>
        </>
    );
}