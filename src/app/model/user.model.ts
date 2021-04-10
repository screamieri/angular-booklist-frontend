import { Book } from "./book.model";

export interface User{
    id : string;
    firstName : string;
    lastName : string;
    email : string;
    password : string;
    books : Book[];
}