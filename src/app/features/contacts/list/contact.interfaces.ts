import { Timestamp } from "rxjs";

export type ColumnKeys<T> = Array<keyof T>;
export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: number;
    // created: Timestamp; 
    // updated: Timestamp;
}