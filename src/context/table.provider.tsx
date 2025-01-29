import { CarItem } from "@type/car.ts";
import { AppRoutes, ErrorData } from "@type/types";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { TableContext, TableContextType } from "./table.context";

interface TableProviderProps {
    section: AppRoutes
    children: ReactNode
}

export const TableProvider = ({ section, children }: TableProviderProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [tableRows, setTableRows] = useState<any[]>([]);
    const [loadingTableRows, setLoadingTableRows] = useState(false);
    const [errorTableRows, setErrorTableRows] = useState<ErrorData>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleAddRow = (newItem: any) => {
        setTableRows([...tableRows, newItem]);
    }

    const handleDeleteRow = (idRow: number) => {
        const filteredRows = tableRows.filter((item) => item.id !== idRow);
        setTableRows(filteredRows);
    }

    const fetchRows = useCallback(async () => {
        try {
            setLoadingTableRows(true);
            const API_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api${section}?page=0&size=5&sort=-createdAt`;
            const requestParams: RequestInit = {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                }
            }
            await fetch(API_URL, requestParams)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Fetch Failed");
                    }
                    return response.json();
                })
                .then((response) => {
                    let rows = [];
                    if (section === "/cars") {
                        rows = response.map((car: CarItem) => ({
                            id: car.id,
                            companyName: car.companyName,
                            km: car.km,
                            modelName: car.modelName
                        }));
                    } else {
                        console.log(response);
                    }
                    setTableRows(rows);
                })
                .catch((error) => { setErrorTableRows(error) });
        } catch (error) {
            setErrorTableRows(error as Error);
        } finally {
            setLoadingTableRows(false);
        }
    }, []);

    useEffect(() => {
        fetchRows();
    }, []);


    const value: TableContextType = {
        tableRows,
        loadingTableRows,
        errorTableRows,
        handleAddRow,
        handleDeleteRow,
        fetchRows
    }

    return (
        <TableContext.Provider value={value}>{children}</TableContext.Provider>
    );
}