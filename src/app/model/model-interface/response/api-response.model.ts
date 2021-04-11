import { Item } from "./item.model";

export interface ApiResponse{
    totalItems: number;
    items: Item[];
}