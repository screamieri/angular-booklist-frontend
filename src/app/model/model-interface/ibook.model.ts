import { iBookDetails } from "./ibookdetails.model";

export interface iBook{

    id : string;
    isbn : string;
    isbn13 : string;
    title : string;
    author : string;
    publisher : string;
    genre : string;
    description: string;
    publishDate : Date;
    imageUrl : string;
    pageCount: number;
    details: iBookDetails;

}