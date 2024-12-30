import { CarItem } from "@type/car";
import { ErrorData } from "@type/types";
import { createContext, useContext } from "react";

const initValue: TableContextType = {
    tableRows: [],
    loadingTableRows: false,
    errorTableRows: null,
    handleAddRow: () => { },
    handleDeleteRow: () => { }
};

export interface TableContextType {
    tableRows: CarItem[],
    loadingTableRows: boolean,
    errorTableRows: ErrorData,
    handleAddRow: (newRow: CarItem) => void
    handleDeleteRow: (idRow: number) => void
}

export const TableContext = createContext<TableContextType>(initValue);

export const useTableContext = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("useTableContext must by within TableContextProvider");
    }
    return context;
}