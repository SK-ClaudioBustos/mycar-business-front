import { DataSchema } from "@type/fetch";
import { IssueItem, IssueModel } from "@type/issue";
import { Parameters } from "@type/types";

export const fetchIssuesRows = async ({ setError, setLoading }: Parameters) => {
    try {
        setLoading(true);
        const API_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api/issues?page=0&size=5&sort=-createdAt`;
        const requestParams: RequestInit = {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(API_URL, requestParams);

        if (!response.ok) {
            throw new Error("Fetch Issues Data Failed");
        }
        const result: DataSchema = await response.json();

        const content: IssueItem[] = result.content.map((item: IssueModel) => ({
            id: item.id,
            name: item.name,
            date: item.createdAt,
            currentDistance: item.currentDistance ?? 0
        }));

        const issuesPaged: DataSchema = {
            ...result,
            content
        }

        return issuesPaged;
    } catch (error) {
        setError(error as Error);
    } finally {
        setLoading(false);
    }
}