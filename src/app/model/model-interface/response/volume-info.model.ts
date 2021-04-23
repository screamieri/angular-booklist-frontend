import { ImageLinks } from "./image-links.model";
import { IndustryIdentifier } from "./industry-identifier.model";

export interface VolumeInfo{
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: Date;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    categories: string[];
    imageLinks: ImageLinks;
    pageCount: number;
}