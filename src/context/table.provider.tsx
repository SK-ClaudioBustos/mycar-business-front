import { Car, CarItem } from "@type/car";
import { ErrorData } from "@type/types";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { TableContext, TableContextType } from "./table.context";

interface TableProviderProps {
    children: ReactNode
}

export const TableProvider = ({ children }: TableProviderProps) => {
    const [tableRows, setTableRows] = useState<CarItem[]>([]);
    const [loadingTableRows, setLoadingTableRows] = useState(false);
    const [errorTableRows, setErrorTableRows] = useState<ErrorData>(null);

    const handleAddRow = (newCar: CarItem) => {
        setTableRows([...tableRows, newCar]);
    }

    const fetchRows = useCallback(async () => {
        try {
            setLoadingTableRows(true);
            const API_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api/cars`;
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
                        throw new Error("An connection error has ocurred");
                    }
                    return response.json();
                })
                .then((response: Car[]) => {
                    const rows: CarItem[] = response.map((car) => ({
                        id: car.id,
                        companyName: car.companyName,
                        km: car.km,
                        modelName: car.modelName
                    }));
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
        handleAddRow
    }

    return (
        <TableContext.Provider value={value}>{children}</TableContext.Provider>
    );
}