export interface CarFormData {
    companyName: string;
    modelName: string;
    km: number;
}

export interface CarItem extends CarFormData {
    id: number;
}

export interface Car extends CarItem {
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
}