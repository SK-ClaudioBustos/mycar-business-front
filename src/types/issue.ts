export interface IssueItem {
    id: number;
    name: string;
    date: string;
    distance: number;
    currentDistance: number;
}

export interface IssueModel {
    id: number;
    name: string;
    description?: string;
    currentDistance?: number;
    carEntityId: number;
    statusEntityId: number;
    typeEntityId: number;
    notificationDate?: string;
    notificationDistance?: number;
    createdAt: string;
    updatedAt?: string;
  }
  