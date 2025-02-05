/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataRows, DataSchema } from "@type/fetch";
import { ErrorData, Parameters } from "@type/types";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { TableContext, TableContextType } from "./table.context";

interface TableProviderProps {
    fetchRows: (params: Parameters) => any
    children: ReactNode
}

export const TableProvider = ({ children, fetchRows }: TableProviderProps) => {
    const [dataRows, setDataRows] = useState<DataRows>(null);
    const [loadingTableRows, setLoadingTableRows] = useState(false);
    const [errorTableRows, setErrorTableRows] = useState<ErrorData>(null);

    const handleAddRow = (newItem: any) => {
        if (dataRows) {
            const data: DataSchema = {
                ...dataRows,
                content: [...dataRows.content, newItem]
            };
            setDataRows(data);
        }
    }

    const handleDeleteRow = (idRow: number) => {
        if (dataRows) {
            const filteredRows = dataRows.content.filter((item) => item.id !== idRow);
            const data: DataSchema = {
                ...dataRows,
                content: filteredRows
            }
            setDataRows(data);
        }
    }

    const handleFetchRows = useCallback(async () => {
        const result = await fetchRows({ setError: setErrorTableRows, setLoading: setLoadingTableRows });
        setDataRows(result);
    }, []);

    useEffect(() => {
        handleFetchRows();
    }, []);


    const value: TableContextType = {
        dataRows,
        loadingTableRows,
        errorTableRows,
        handleAddRow,
        handleDeleteRow,
        fetchRows: handleFetchRows
    }

    return (
        <TableContext.Provider value={value}>{children}</TableContext.Provider>
    );
}