import { IssueItem } from "src/types/issue";
import { TableRowProps } from "src/types/types";

export const IssuesTableRows = ({ item }: TableRowProps) => {
    const { name, date, distance, currentDistance } = item as IssueItem;
    return (
        <>
            <span>
                {name}
            </span>
            <span>
                {date}
            </span>
            <span>
                {distance}
            </span>
            <span>
                {currentDistance}
            </span>
        </>
    );
}