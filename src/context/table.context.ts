import { CarItem } from "@type/car";
import { IssueItem } from "@type/issue";
import { ErrorData } from "@type/types";
import { createContext, useContext } from "react";

const initValue: TableContextType = {
    tableRows: [],
    loadingTableRows: false,
    errorTableRows: null,
    handleAddRow: () => { },
    handleDeleteRow: () => { },
    fetchRows: async () => Promise.resolve() 
};

export interface TableContextType {
    tableRows: CarItem[] | IssueItem[],
    loadingTableRows: boolean,
    errorTableRows: ErrorData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleAddRow: (newItem: any) => void
    handleDeleteRow: (idRow: number) => void
    fetchRows: () => Promise<void>
}

export const TableContext = createContext<TableContextType>(initValue);

export const useTableContext = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("useTableContext must by within TableContextProvider");
    }
    return context;
}