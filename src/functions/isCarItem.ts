import { CarItem } from "@type/car";
import { IssueItem } from "@type/issue";

export function isCarItem(car: CarItem | IssueItem): car is CarItem {
    return (car as CarItem).companyName !== undefined;
}