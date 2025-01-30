/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorData, Parameters } from "@type/types";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { TableContext, TableContextType } from "./table.context";

interface TableProviderProps {
    fetchRows: (params: Parameters) => any
    children: ReactNode
}

export const TableProvider = ({ children, fetchRows }: TableProviderProps) => {
    const [tableRows, setTableRows] = useState<any[]>([]);
    const [loadingTableRows, setLoadingTableRows] = useState(false);
    const [errorTableRows, setErrorTableRows] = useState<ErrorData>(null);

    const handleAddRow = (newItem: any) => {
        setTableRows([...tableRows, newItem]);
    }

    const handleDeleteRow = (idRow: number) => {
        const filteredRows = tableRows.filter((item) => item.id !== idRow);
        setTableRows(filteredRows);
    }

    const handleFetchRows = useCallback(async () => {
        const result = await fetchRows({ setError: setErrorTableRows, setLoading: setLoadingTableRows });
        setTableRows(result);
    },[]);

    useEffect(() => {
        handleFetchRows();
    }, []);


    const value: TableContextType = {
        tableRows,
        loadingTableRows,
        errorTableRows,
        handleAddRow,
        handleDeleteRow,
        fetchRows:  handleFetchRows
    }

    return (
        <TableContext.Provider value={value}>{children}</TableContext.Provider>
    );
}