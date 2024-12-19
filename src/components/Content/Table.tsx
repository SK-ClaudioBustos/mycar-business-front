import { Car } from "@type/types";
import "./styles/Table.css";
import { TableRow } from "./TableRow";

const CARS: Car[] = [
    {
        id: "1",
        company: "Renault",
        model: "12",
        KM: 1500
    },
    {
        id: "2",
        company: "Toyota",
        model: "Corolla",
        KM: 25000
    },
    {
        id: "3",
        company: "Ford",
        model: "Focus",
        KM: 32000
    },
    {
        id: "4",
        company: "Chevrolet",
        model: "Onix",
        KM: 18000
    },
    {
        id: "5",
        company: "Volkswagen",
        model: "Golf",
        KM: 45000
    },
    {
        id: "6",
        company: "Honda",
        model: "Civic",
        KM: 22000
    },
    {
        id: "7",
        company: "Hyundai",
        model: "Elantra",
        KM: 12000
    },
    {
        id: "8",
        company: "Nissan",
        model: "Sentra",
        KM: 27000
    },
    {
        id: "9",
        company: "BMW",
        model: "3 Series",
        KM: 55000
    },
    {
        id: "10",
        company: "Mercedes-Benz",
        model: "C-Class",
        KM: 40000
    }
];


export const Table = () => {
    return (
        <div className="table box-shadow">
            <div className="table-header-container">
                <div className="table-header">
                    <span>
                        Company
                    </span>
                    <span>
                        Model
                    </span>
                    <span>
                        KM
                    </span>
                    <div className="actions-header"></div>
                </div>
            </div>
            <div className="table-body">
                {
                    CARS.map((car) => (
                        <TableRow key={car.id} car={car} />
                    ))
                }
            </div>
        </div>
    );
}