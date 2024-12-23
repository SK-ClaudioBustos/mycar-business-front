export interface CarItem {
    id: number;
    company: string;
    model: string;
    KM: number;
}

export interface Car {
    id: number;
    companyName: string;
    modelName: string;
    userId: number;
    km: number;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
}